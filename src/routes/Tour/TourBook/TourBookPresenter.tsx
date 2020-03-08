import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GetBooks_GetBooks_books } from '../../../types/api';

import Board from '../../../components/Board';
import Title from '../../../components/Title';
import Text from '../../../components/Text';
import Sort from '../../../components/Sort';

interface IProps {
  books: (GetBooks_GetBooks_books | null)[] | null | undefined;
  sort: string;
}

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
  width: 230px;
  padding: 15px;
  margin: 30px;
  border-radius: 10px;
  &:hover {
    background-color: rgba(100, 100, 100, 0.1);
  }
`;

const TitleWrapper = styled.div`
  margin-top: 10px;
`;
const AuthorWrapper = styled.div`
  margin-top: 10px;
`;
const TourBookPresenter: React.SFC<IProps> = ({ books, sort }) => {
  return (
    <>
      <Sort sort={sort} />
      <Main>
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
    </>
  );
};

export default TourBookPresenter;
