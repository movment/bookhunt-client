import React from 'react';
import TourPresenter from './TourBookPresenter';
import { useQuery } from '@apollo/react-hooks';
import queryString from 'query-string';
import { GET_BOOKS } from './TourBookQueries';
import Text from '../../../components/Text';
import { GetBooks } from '../../../types/api';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import BoardLayout from '../../../components/BoardLayout';

const TourBookContainer: React.SFC<RouteComponentProps> = ({ location }) => {
  const { sort = 'views', page = '1' } = queryString.parse(location.search);
  console.log('TEST', typeof page);
  const { loading, error, data } = useQuery<GetBooks>(GET_BOOKS, {
    variables: {
      sort: (sort as string).toUpperCase(),
      page: parseInt(page as string),
    },
    // fetchPolicy: 'network-only',
  });
  console.log(data);
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error...</Text>;
  }
  return (
    <BoardLayout
      books={data?.GetBooks?.books}
      sort={sort as string}
      page={page as string}
      max={data?.GetBooks?.max as number}
      to="/tour"
    />
  );
};

export default withRouter(TourBookContainer);
