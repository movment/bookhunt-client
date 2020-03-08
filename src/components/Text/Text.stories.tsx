import React from 'react';
import Text from './Text';
import GlobalStyle from '../GlobalStyle';

export default {
  title: 'Text',
  component: Text,
};

export const Default = () => {
  return (
    <>
      <GlobalStyle />
      <Text>계정이 없으신가요?</Text>
    </>
  );
};
