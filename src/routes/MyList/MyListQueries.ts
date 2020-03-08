import { gql } from 'apollo-boost';

export const GET_MY_LIST = gql`
  query GetLists($type: options) {
    GetLists(type: $type) {
      ok
      error
      lists {
        id
        title
      }
    }
  }
`;

export const ADD_BOOK_LIST = gql`
  mutation AddBookList($title: String!) {
    AddBookList(title: $title) {
      ok
      error
      list {
        id
        title
      }
    }
  }
`;
