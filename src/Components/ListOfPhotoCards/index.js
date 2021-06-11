import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/useGetPhotos'

export const ListOfPhotoCards = ({ categoryID }) => {
  const { loading, error, data } = useGetPhotos(categoryID)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :c</p>

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}

// export const ListOfPhotoCards = getPhotos(ListOfPhotoCardsComponent)
