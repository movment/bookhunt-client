import { gql } from 'apollo-boost';

export const GET_ALL_LISTS = gql`
  query GetAllList($type: options, $sort: SortOptions, $page: Int) {
    GetLists(type: $type, sort: $sort, page: $page) {
      ok
      error
      max
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
