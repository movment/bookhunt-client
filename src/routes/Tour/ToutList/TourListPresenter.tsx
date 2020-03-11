import React from 'react';
import { Board, BoardWrapper } from '../../../components/Board';

interface IProps {
  lists: any;
}
const TourListPresenter: React.SFC<IProps> = ({ lists }) => {
  return (
    <BoardWrapper>
      <Board lists={lists} />
    </BoardWrapper>
  );
};

export default TourListPresenter;
