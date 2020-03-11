import React from 'react';
import { GetBooksInList_GetBooksInList_books } from '../../types/api';
import styled from 'styled-components';
import SearchInput from '../../components/SearchInput';
import { BoardWrapper, Board, BoardButton } from '../../components/Board';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 1000;
`;
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 20%;
  /* height: 30%; */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.6);
`;
const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

interface IProps {
  books: (GetBooksInList_GetBooksInList_books | null)[] | undefined | null;
  clicked: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleClick: (bookId: number) => void;
}

const ListPresenter: React.SFC<IProps> = ({
  books,
  clicked,
  onClick,
  handleClick,
}) => {
  return (
    <div>
      {clicked && (
        <Container onClick={onClick}>
          <Modal
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
            }}
          >
            <FormInner>
              <SearchInput clickEvent={handleClick} />
            </FormInner>
          </Modal>
        </Container>
      )}
      <div>
        <div style={{ width: '70%', margin: '0 auto' }}>
          <SearchInput />
        </div>
        <BoardWrapper>
          <BoardButton onClick={onClick} />
          <Board books={books} />
        </BoardWrapper>
      </div>
    </div>
  );
};

export default ListPresenter;
