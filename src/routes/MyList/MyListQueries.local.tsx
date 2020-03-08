import { gql } from 'apollo-boost';

export const ADD_BOOK_LIST_IN_CACHE = gql`
  mutation addList($id: String, $title: String) {
    addList(id: $id, title: $title) @client
  }
`;
