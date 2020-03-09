import { gql } from 'apollo-boost';

export const GET_BOOK = gql`
  query GetBook($bookId: Int!) {
    GetBooks(bookId: $bookId) {
      ok
      error
      books {
        isFav
        id
        title
        link
        image
        author
        translator
        publisher
        pubdate
        description
        # reviews {
        #   id
        #   comment
        #   user {
        #     name
        #   }
        # }
      }
    }
  }
`;

export const ADD_FAV = gql`
  mutation AddFavorite($bookId: Int!) {
    AddFavorite(bookId: $bookId) {
      ok
      error
    }
  }
`;

// export const ADD_REVIEW = gql`
//   mutation AddReview($bookId: Int!, $comment: String!, $rating: Rating!) {
//     AddReview(bookId: $bookId, comment: $comment, rating: $rating) {
//       ok
//       error
//       reviewId
//     }
//   }
// `;
