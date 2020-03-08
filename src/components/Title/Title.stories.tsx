import React from 'react';
import Title from './Title';
import GlobalStyle from '../GlobalStyle';

export default {
  title: 'Title',
  component: Title,
};

export const Default = () => {
  return (
    <>
      <GlobalStyle />
      <Title type="Large">BookHunt</Title>
    </>
  );
};
