import React, { useState } from 'react';
import SignUpPresenter from './SignUpPresenter';
import { SIGN_UP } from './SignUpQueries';
import { useMutation } from '@apollo/react-hooks';
import { RouteComponentProps } from 'react-router-dom';
import { SignUp } from '../../types/api';

const SignUpContainer: React.SFC<RouteComponentProps> = ({ history }) => {
  const [signUp] = useMutation<SignUp>(SIGN_UP, {
    onCompleted: ({ SignUp }) => {
      if (!SignUp.error) {
        history.push('/');
      }
    },
  });
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    verifyPassword: '',
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      target: { name, value },
    } = event;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (input.email.length > 6 && input.name.length)
      signUp({
        variables: {
          name: input.name,
          email: input.email,
          password: input.password,
        },
      });
  };
  return (
    <SignUpPresenter onSubmit={onSubmit} input={input} onChange={onChange} />
  );
};

export default SignUpContainer;
