import React from 'react';
import styled from 'styled-components';
import SearchInput from '../../components/SearchInput';
import SLink from '../../components/SLink';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import TourBook from './TourBook';
import TourList from './ToutList';

const SubNav = styled.nav`
  display: flex;
  /* width: 75%; */
  /* padding: 0 20%; */
  border-bottom: 1px solid black;
  & > a {
    margin-right: 20px;
    border-bottom: 1px solid black;
  }
`;
const Sub = styled.div`
  display: flex;
  width: 75%;
  margin: 0 25%;
`;

const TourPresenter: React.SFC<RouteComponentProps> = () => {
  return (
    <>
      <div style={{ width: '70%', margin: '0 auto' }}>
        <SearchInput />
      </div>
      <SubNav>
        <Sub>
          <SLink to="/tour">도서</SLink>
          <SLink to="/tour/list">책장</SLink>
        </Sub>
      </SubNav>
      <Switch>
        <Route path="/tour" component={TourBook} exact />
        <Route path="/tour/list" component={TourList} />
      </Switch>
    </>
  );
};

export default TourPresenter;
