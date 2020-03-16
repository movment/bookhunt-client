import React from 'react';
import { GetBooksInList_GetBooksInList_books } from '../../types/api';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import SearchInput from '../../components/SearchInput';
import { BoardWrapper, Board, BoardButton } from '../../components/Board';
import Title from '../../components/Title';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);

  z-index: 1000;
`;
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  /* width: 20%; */
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
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 75%; */
  height: 70px;
  margin: 0 auto;
  border-bottom: 1px solid black;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 70%;
`;
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

interface IProps {
  auth: boolean;
  books: (GetBooksInList_GetBooksInList_books | null)[] | undefined | null;
  clicked: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleClick: (bookId: number) => void;
  title: string;
  user: any;
}

const ListPresenter: React.SFC<IProps> = ({
  auth,
  books,
  clicked,
  onClick,
  handleClick,
  title,
  user,
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
        <Nav>
          <TitleWrapper>
            <Title>{title}</Title>
          </TitleWrapper>
          <UserWrapper>
            <FontAwesomeIcon icon={faUser} />
            <span>{user?.name}</span>
          </UserWrapper>
        </Nav>
        <BoardWrapper>
          {auth && <BoardButton onClick={onClick} />}
          <Board books={books} />
        </BoardWrapper>
      </div>
    </div>
  );
};

export default ListPresenter;
