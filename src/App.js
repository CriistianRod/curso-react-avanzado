import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './Components/ListOfPhotoCards'
import { Logo } from './Components/Logo'
import { GlobalStyle } from './styles/GlobalStyle'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { PhotoCard } from './Components/PhotoCard'

export const App = () => {
  const urlParams = new URLSearchParams(location.search)

  const detailId = urlParams.get('detail')
  console.log('detailId: ', detailId)

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Fragment>
          <ListOfCategories />
          <ListOfPhotoCards categoryID={1} />
        </Fragment>
      )}
    </div>
  )
}
