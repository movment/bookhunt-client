import React from 'react';
import Input from './Input';
import GlobalStyle from '../GlobalStyle';

export default {
  title: 'Input',
  component: Input,
};

export const Default = () => {
  return (
    <>
      <GlobalStyle />
      <Input placeholder="이메일" />
    </>
  );
};

export const Password = () => {
  return (
    <>
      <GlobalStyle />
      <Input type="password" placeholder="비밀번호" />
    </>
  );
};

export const NoText = () => {
  return (
    <>
      <GlobalStyle />
      <Input placeholder="이메일" />
      <Input placeholder="이름" />
    </>
  );
};
