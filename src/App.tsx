import React from 'react';
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import Home from './routes/Home/';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Celeb from './routes/Celeb';
import Tour from './routes/Tour';
import Nav from './components/Nav';
import Book from './routes/Book';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import MyList from './routes/MyList';
import List from './routes/List';
import Search from './routes/Search';
import Footer from './components/Footer';

const IS_LOGGED_IN = gql`
  {
    auth {
      isLoggedIn @client
    }
  }
`;

const App: React.SFC<RouteComponentProps> = ({ location }) => {
  const { data } = useQuery(IS_LOGGED_IN, {
    fetchPolicy: 'cache-only',
  });
  return (
    <>
      <Nav isLoggedIn={data?.auth.isLoggedIn} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        {/* <Route path="/signout" component={SignOut} /> */}
        <Route path="/celeb" component={Celeb} />
        <Route path="/tour" component={Tour} />
        {/* <Route path="/tour/list" component={TourList} /> */}
        <Route path="/mylist" component={MyList} />
        <Route path="/book/:id" component={Book} />
        <Route path="/list/:id" component={List} />
        <Route path="/search" component={Search} />
      </Switch>
      <Footer />
    </>
  );
};

export default withRouter(App);
