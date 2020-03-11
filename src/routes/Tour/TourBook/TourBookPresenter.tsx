import React from 'react';

import { GetBooks_GetBooks_books } from '../../../types/api';
import Sort from '../../../components/Sort';
import { BoardWrapper, Board } from '../../../components/Board';
import Pagination from '../../../components/Pagination';

interface IProps {
  books: (GetBooks_GetBooks_books | null)[] | null | undefined;
  sort: string;
  page: string;
  max: number | null | undefined;
}

const TourBookPresenter: React.SFC<IProps> = ({ books, sort, page, max }) => {
  return (
    <>
      <Sort sort={sort} />
      <BoardWrapper>
        <Board books={books} />
      </BoardWrapper>
      <Pagination page={parseInt(page)} max={max} />
    </>
  );
};

export default TourBookPresenter;
