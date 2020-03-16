import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  justify-content: center;

  padding-top: 20px;
  height: 150px;
  border-top: 1px solid rgba(15, 15, 15, 0.1);
  background-color: #f8f8f8;
`;

const FooterPresenter = () => {
  return (
    <Footer>
      <span>{'<b>서비스 이용약관</b>'.replace(/<\/?[^>]+(>|$)/g, '')}</span>
    </Footer>
  );
};

export default FooterPresenter;
