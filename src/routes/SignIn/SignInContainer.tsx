import React, { useState, ChangeEventHandler, FormEventHandler } from 'react';
import SignInPresenter from './SignInPresenter';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from './SignInQueries';
import { RouteComponentProps } from 'react-router-dom';
import { USER_SIGN_IN } from '../../queries/queries.local';
import { SignIn } from '../../types/api';

const SignInContainer: React.SFC<RouteComponentProps> = ({ history }) => {
  const [userSignIn] = useMutation(USER_SIGN_IN);
  const [signIn, data] = useMutation<SignIn>(SIGN_IN, {
    onCompleted: ({ SignIn }) => {
      userSignIn({
        variables: {
          token: SignIn.token,
        },
      }).then(() => history.push('/'));
    },
  });

  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      target: { name, value },
    } = event;
    setInput({ ...input, [name]: value });
  };
  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    signIn({
      variables: {
        email: input.email,
        password: input.password,
      },
    });
  };

  // console.log('SignIn', data);

  return (
    <SignInPresenter input={input} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default React.memo(SignInContainer);
