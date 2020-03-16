import React from 'react';
import TourListPresenter from './TourListPresenter';
import { useQuery } from '@apollo/react-hooks';
import queryString from 'query-string';
import { GET_ALL_LISTS } from './TourListQueries';
import { GetLists } from '../../../types/api';
import { RouteComponentProps } from 'react-router-dom';
import BoardLayout from '../../../components/BoardLayout';

enum SortOptions {
  VIEWS,
  PUBDATE,
}
interface IProps {
  sort: SortOptions;
}
const TourListContainer: React.SFC<RouteComponentProps> = ({
  location: { search },
}) => {
  const { sort = 'views', page = 1 } = queryString.parse(search);
  const { data } = useQuery<any>(GET_ALL_LISTS, {
    variables: {
      type: 'ALL',
      sort: (sort as string).toUpperCase(),
      page: parseInt(page as string),
    },
  });
  console.log(data?.GetLists?.max);
  return (
    <BoardLayout
      lists={data?.GetLists.lists}
      sort={sort as string}
      page={page as string}
      max={data?.GetLists?.max}
      to="/tour/list"
    />
  );
};

export default TourListContainer;
