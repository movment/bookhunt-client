import { gql } from 'apollo-boost';

export const SEARCH_BOOKS = gql`
  query SearchBooks($max: Int, $title: String!) {
    SearchBooks(max: $max, title: $title) {
      ok
      error
      books {
        id
        title
        image
        author
        publisher
      }
    }
  }
`;
