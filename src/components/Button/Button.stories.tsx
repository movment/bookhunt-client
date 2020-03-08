import React from 'react';
import Button from './Button';
import GlobalStyle from '../GlobalStyle';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => {
  return (
    <>
      <GlobalStyle />
      <Button>확인</Button>
    </>
  );
};

export const NoText = () => {
  return (
    <>
      <GlobalStyle />
      <Button></Button>
    </>
  );
};
