import { gql } from 'apollo-boost';

export const GET_REVIEWS = gql`
  query GetReviews($bookId: Int!) {
    GetReviews(bookId: $bookId) {
      ok
      error
      reviews {
        id
        comment
        user {
          name
        }
      }
    }
  }
`;
