import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { USER_SIGN_OUT } from '../../queries/queries.local';
import SLink from '../SLink';
import { ApolloClient } from 'apollo-boost';

interface IProps {
  isLoggedIn: boolean;
  client?: ApolloClient<any>;
}

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  /* overflow: scroll; */
  margin: 0 auto;
  width: 75%;
  text-shadow: -1px 0px 0px rgba(255, 255, 255, 0.3),
    1px 0px 0px rgba(255, 255, 255, 0.3), 0px -1px 0px rgba(255, 255, 255, 0.3),
    0px 1px 0px rgba(255, 255, 255, 0.3);
  font-weight: 600;
  font-size: 18px;
  & > a {
    margin: 10px 0;
    &:active {
      color: white;
    }
  }
`;
const Sub = styled.div`
  display: flex;
`;

const Nav: React.SFC<IProps> = ({ isLoggedIn }) => {
  const [userSignOut, { client }] = useMutation(USER_SIGN_OUT);

  return (
    <Navigation>
      <div>
        <SLink to="/">BookHunt</SLink>
      </div>
      <Sub>
        <SLink to="/celeb" style={{ color: 'rgb(254, 78, 18)' }}>
          #셀럽의 서재
        </SLink>
        <SLink to="/tour">둘러보기</SLink>
        {isLoggedIn ? (
          <>
            <SLink to="/mylist">내 서재</SLink>
            <SLink
              to="/"
              onClick={async () => {
                await userSignOut();
                await client?.resetStore();
              }}
            >
              로그아웃
            </SLink>
          </>
        ) : (
          <>
            <SLink to="/signin">로그인</SLink>
            <SLink to="/signup">회원가입</SLink>
          </>
        )}
      </Sub>
    </Navigation>
  );
};

export default Nav;
