import { gql } from 'apollo-boost';

export const TOGGLE_FAV = gql`
  mutation ToggleFav($bookId: Int!, $isFav: Boolean!) {
    ToggleFav(bookId: $bookId, isFav: $isFav) @client
  }
`;
