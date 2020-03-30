import React, { useState, ChangeEventHandler, FormEventHandler } from 'react';
import SignInPresenter from './SignInPresenter';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from './SignInQueries';
import { RouteComponentProps } from 'react-router-dom';
import { USER_SIGN_IN } from '../../queries/queries.local';
import { SignIn } from '../../types/api';
import axios from 'axios';

const SignInContainer: React.SFC<RouteComponentProps> = ({ history }) => {
  const [userSignIn] = useMutation(USER_SIGN_IN);
  const [signIn] = useMutation<SignIn>(SIGN_IN, {
    onCompleted: ({ SignIn }) => {
      if (!SignIn.error) {
        userSignIn({
          variables: {
            token: SignIn.token,
          },
        }).then(() => history.push('/'));
      }
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
    // signIn({
    //   variables: {
    //     email: input.email,
    //     password: input.password,
    //   },
    // });
    axios
      .post('http://localhost:4000/auth/signin', input, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        userSignIn({
          variables: {
            token: res.data.token,
          },
        }).then(() => history.push('/'));
      })
      .catch((err) => console.log(err));
  };

  // console.log('SignIn', data);

  return (
    <SignInPresenter input={input} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default React.memo(SignInContainer);
