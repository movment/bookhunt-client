import React from 'react';
import Hashtag from './Hashtag';
import GlobalStyle from '../GlobalStyle';

export default {
  title: 'Hashtag',
  component: Hashtag,
};

export const Default = () => {
  return (
    <>
      <GlobalStyle />
      <Hashtag>#스타트업</Hashtag>
    </>
  );
};
