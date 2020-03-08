import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { GetBooksInList_GetBooksInList_books } from '../../types/api';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Board from '../../components/Board';
import Title from '../../components/Title';
import Text from '../../components/Text';
import SearchInput from '../../components/SearchInput';

const Main = styled.main`
  margin: 0 auto;
  width: 75%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Section = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 200px;
  margin: 45px;
`;

const TitleWrapper = styled.div`
  margin-top: 10px;
`;
const AuthorWrapper = styled.div`
  margin-top: 10px;
`;

interface IProps {
  title: string;
  search: any[];
  books: (GetBooksInList_GetBooksInList_books | null)[] | undefined | null;
  toggle: (bookId: number, isAdded: boolean) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clicked: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
const ListPresenter: React.SFC<IProps> = ({
  title,
  search,
  onChange,
  toggle,
  books,
  clicked,
  onClick,
  children,
}) => {
  console.log(children);
  return (
    <div>
      {clicked && (
        <Modal onClick={onClick}>
          <div
            style={{
              position: 'relative',
              backgroundColor: 'white',
              left: '500px',
              top: '300px',
              // transform: 'translate(-50%, -50%)',
              width: '50%',
            }}
          >
            <div style={{ width: '70%', margin: '0 auto' }}>
              <SearchInput
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <Button>+</Button>
              </SearchInput>
            </div>
            <Input
              placeholder="책 이름을 입력하세요"
              onChange={onChange}
              value={title}
              onClick={(event) => {
                event.stopPropagation();
              }}
            />

            <div>
              {search?.map((book) => (
                <div
                  key={book?.id}
                  onClick={(event) => event?.stopPropagation()}
                >
                  <div>{book?.title}</div>
                  <Button onClick={() => toggle(book?.id, book?.isAdded)}>
                    {!book?.isAdded ? '추가' : '취소'}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
      <div>
        <Main>
          <Section to="#">
            <Board to="#">
              <Button onClick={onClick}>+</Button>
            </Board>
          </Section>
          {books?.map((book) => {
            return (
              <Section to={`/book/${book?.id}`} key={book?.id}>
                <Board
                  to={`/book/${book?.id}`}
                  key={book?.id}
                  image={book?.image}
                />
                <TitleWrapper>
                  <Title type="small">{book?.title}</Title>
                </TitleWrapper>
                <AuthorWrapper>
                  <Text>{book?.author}</Text>
                </AuthorWrapper>
              </Section>
            );
          })}
        </Main>
      </div>
    </div>
  );
};

export default ListPresenter;
