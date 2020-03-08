import React from 'react';
import SingOutPresenter from './SingOutPresenter';
import { useMutation } from '@apollo/react-hooks';
import { USER_SIGN_OUT } from '../../queries/queries.local';
const SingOutContainer = () => {
  const [userSignOut] = useMutation(USER_SIGN_OUT);

  if (false) return <SingOutPresenter />;
  else {
    return <div>Hello</div>;
  }
};

export default SingOutContainer;
