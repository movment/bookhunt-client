import { gql } from 'apollo-boost';

export const SEARCH_BOOK = gql`
  query SearchBook($max: Int, $title: String!) {
    SearchBooks(max: $max, title: $title) {
      ok
      error
      books {
        id
        title
        author
        isAdded @client
      }
    }
  }
`;

export const TOGGLE_ADD = gql`
  mutation ToggleAdded($bookId: Int, $isAdded: Boolean) {
    ToggleAdded(bookId: $bookId, isAdded: $isAdded) @client
  }
`;
