import React from 'react';
import TourListPresenter from './TourListPresenter';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_LISTS } from './TourListQueries';
import { GetLists } from '../../../types/api';

enum SortOptions {
  VIEWS,
  PUBDATE,
}
interface IProps {
  sort: SortOptions;
}
const TourListContainer = () => {
  const { data } = useQuery<GetLists>(GET_ALL_LISTS, {
    variables: {
      type: 'ALL',
    },
  });
  console.log(data?.GetLists);
  return <TourListPresenter lists={data?.GetLists.lists} />;
};

export default TourListContainer;
