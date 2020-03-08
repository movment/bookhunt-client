import { gql } from 'apollo-boost';

enum SortOptions {
  VIEWS,
  PUBDATE,
}
export const GET_BOOKS = gql`
  query GetBooks($sort: SortOptions) {
    GetBooks(sort: $sort) {
      ok
      error
      books {
        id
        title
        image
        author
        link
      }
    }
  }
`;
