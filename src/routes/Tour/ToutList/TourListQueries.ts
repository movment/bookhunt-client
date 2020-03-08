import { gql } from 'apollo-boost';

export const GET_ALL_LISTS = gql`
  query GetAllList($type: options) {
    GetLists(type: $type) {
      lists {
        id
        title
        user {
          id
          name
        }
      }
    }
  }
`;
