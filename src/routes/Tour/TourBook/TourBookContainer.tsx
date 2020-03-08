import React from 'react';
import TourPresenter from './TourBookPresenter';
import { useQuery } from '@apollo/react-hooks';
import queryString from 'query-string';
import { GET_BOOKS } from './TourBookQueries';
import Text from '../../../components/Text';
import { GetBooks } from '../../../types/api';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const TourBookContainer: React.SFC<RouteComponentProps> = ({ location }) => {
  const { sort = 'views' } = queryString.parse(location.search);

  const { loading, error, data } = useQuery<GetBooks>(GET_BOOKS, {
    variables: {
      sort: (sort as string).toUpperCase(),
    },
  });
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error...</Text>;
  }
  return <TourPresenter books={data?.GetBooks?.books} sort={sort as string} />;
};

export default withRouter(TourBookContainer);
