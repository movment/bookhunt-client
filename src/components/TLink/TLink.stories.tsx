import React from 'react';
import TLink from './TLink';
import GlobalStyle from '../GlobalStyle';

export default {
  title: 'Tlink',
  component: TLink,
};

export const Default = () => {
  return (
    <>
      <GlobalStyle />
      <TLink>회원가입</TLink>
    </>
  );
};
