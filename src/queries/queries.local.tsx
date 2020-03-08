import { gql } from 'apollo-boost';

export const USER_SIGN_IN = gql`
  mutation UserSignIn($token: String!) {
    UserSignIn(token: $token) @client
  }
`;

export const USER_SIGN_OUT = gql`
  mutation UserSignOut {
    UserSignOut @client
  }
`;
