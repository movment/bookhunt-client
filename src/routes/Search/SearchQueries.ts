import { gql } from 'apollo-boost';

export const SEARCH_DETAIL = gql`
  query SearchDetail($max: Int, $title: String!) {
    SearchBooks(max: $max, title: $title) {
      books {
        id
        title
        image
        author
        publisher
        description
      }
    }
  }
`;
