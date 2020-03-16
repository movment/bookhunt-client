// deprecated
import React from 'react';
import { Board, BoardWrapper } from '../../../components/Board';
import Sort from '../../../components/Sort';
import Pagination from '../../../components/Pagination';

interface IProps {
  lists: any;
  sort: string;
  page: string;
  max: number;
}
const TourListPresenter: React.SFC<IProps> = ({ lists, sort, page, max }) => {
  return (
    <div>
      <Sort sort={sort} to="/tour/list" />
      <BoardWrapper>
        <Board lists={lists} />
      </BoardWrapper>
      <Pagination page={parseInt(page)} max={max} to="/tour/list" sort={sort} />
    </div>
  );
};

export default TourListPresenter;
