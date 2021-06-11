import { useEffect, useState, useRef } from 'react'

export function useNearScreen() {
  const element = useRef(null)

  const [show, setShow] = useState(false)

  useEffect(
    function () {
      Promise.resolve(
        typeof IntersectionObserver !== undefined
          ? IntersectionObserver
          : import('intersection-observer')
      ).then(() => {
        const observer = new IntersectionObserver(function (entries) {
          // console.log(entries)
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            // console.log('Sí')
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(element.current)
      })
      // console.log(element.current)
    },
    [element]
  )

  return [show, element]
}
