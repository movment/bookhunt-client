import { gql } from 'apollo-boost';

export const GET_BOOKS = gql`
  query GetBooks($sort: SortOptions, $page: Int!) {
    GetBooks(sort: $sort, page: $page) {
      ok
      error
      books {
        id
        title
        image
        author
        link
      }
      max
    }
  }
`;
