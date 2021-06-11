import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles.js'

function useCategoriesData() {
  const [categories, setCategories] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    fetch('https://petgram-server-cris-criistianrod.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200
        showFixed !== newShowFixed && setShowFixed(newShowFixed)
      }

      addEventListener('scroll', onScroll)

      return () => document.removeEventListener('scroll', onScroll)
    },
    [showFixed]
  )

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="Loading">
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      )}
    </List>
  )

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
