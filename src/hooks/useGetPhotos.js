import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetPhotos = (categoryId) => {
  const { loading, data, error } = useQuery(GET_PHOTOS, {
    variables: { categoryId },
  })
  // console.log('categoryId: ', categoryId)
  // console.log('Data: ', data)

  return { loading, data, error }
}
