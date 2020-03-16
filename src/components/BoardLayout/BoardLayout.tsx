import React from 'react';
import Sort from '../Sort';
import { BoardWrapper } from '../Board/BoardPresenter';
import { Board } from '../Board';
import Pagination from '../Pagination';

interface IProps {
  books?: any;
  lists?: any;
  sort: string;
  page: string;
  max: number;
  to: string;
}
const BoardLayout: React.SFC<IProps> = ({
  lists,
  sort,
  page,
  max,
  books,
  children,
  to,
}) => {
  return (
    <div>
      <Sort sort={sort} to={to} />
      <BoardWrapper>
        {children}
        <Board lists={lists} books={books} />
      </BoardWrapper>
      <Pagination page={parseInt(page)} max={max} to={to} sort={sort} />
    </div>
  );
};

export default BoardLayout;
