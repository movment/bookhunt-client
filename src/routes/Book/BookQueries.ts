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
      }
    }
    GetListsOfBook(bookId: $bookId) {
      lists {
        id
        title
        user {
          id
          name
        }
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

export const GET_LISTS_OF_BOOK = gql`
  query GetListsOfBook($bookId: Int!) {
    GetListsOfBook(bookId: $bookId) {
      lists {
        id
        title
      }
    }
  }
`;
