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
          id
          name
        }
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation AddReview($bookId: Int!, $comment: String!, $rating: Rating!) {
    AddReview(bookId: $bookId, comment: $comment, rating: $rating) {
      ok
      error
    }
  }
`;
