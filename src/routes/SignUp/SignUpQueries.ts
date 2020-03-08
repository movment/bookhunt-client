import { gql } from 'apollo-boost';

export const SIGN_UP = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!) {
    SignUp(name: $name, email: $email, password: $password) {
      ok
      error
    }
  }
`;
