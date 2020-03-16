import React from 'react';
import { GetBook_GetListsOfBook_lists } from '../../types/api';
import styled from 'styled-components';
import Title from '../Title';
import { Board } from '../Board';

interface IProps {
  lists: (GetBook_GetListsOfBook_lists | null)[] | null | undefined;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  /* border-top: 1px solid rgba(0, 0, 0, 0.1); */
  min-height: 100px;
`;
const Label = styled.span`
  font-size: 18px;
`;

const BoardWrapper = styled.div`
  display: flex;
  margin: 0 auto;

  flex-wrap: wrap;
`;
const RowList: React.SFC<IProps> = ({ lists }) => {
  console.log(lists);
  return (
    <Container>
      <div>
        <Label>이 작품이 담긴 리스트</Label>
      </div>
      <BoardWrapper>
        {lists?.length ? (
          <Board lists={lists} width="200px" height="300px" />
        ) : (
          <span>X</span>
        )}
      </BoardWrapper>
    </Container>
  );
};

export default RowList;
