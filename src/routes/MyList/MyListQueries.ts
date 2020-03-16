import { gql } from 'apollo-boost';

export const GET_MY_LIST = gql`
  query GetLists($type: options, $sort: SortOptions, $page: Int) {
    GetLists(type: $type, sort: $sort, page: $page) {
      ok
      error
      lists {
        id
        title
      }
      max
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
