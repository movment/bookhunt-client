import { gql } from 'apollo-boost';

export const ADD_BOOK_IN_LIST = gql`
  mutation AddBookInList($listId: Int!, $bookId: Int!) {
    AddBookInList(listId: $listId, bookId: $bookId) {
      ok
      error
    }
  }
`;

export const GET_BOOKS_IN_LIST = gql`
  query GetBooksInList($listId: Int!) {
    GetBooksInList(listId: $listId) {
      ok
      error
      books {
        id
        title
        author
        image
      }
      list {
        title
        user {
          id
          name
        }
      }
    }
  }
`;
