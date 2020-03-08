import React from 'react';
import { GetLists_GetLists_lists } from '../../../types/api';
import styled from 'styled-components';
import Board from '../../../components/Board';
import Title from '../../../components/Title';
import Text from '../../../components/Text';
import { Link } from 'react-router-dom';

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
  lists: any;
}
const TourListPresenter: React.SFC<IProps> = ({ lists }) => {
  return (
    <Main>
      {lists?.map((list) => {
        return (
          <Section to={`/list/${list?.id}`} key={list?.id}>
            <Board
              to={`/list/${list?.id}`}
              key={list?.id}
              // image={book?.image}
            />
            <TitleWrapper>
              <Title type="small">{list?.title}</Title>
            </TitleWrapper>
            <AuthorWrapper>
              <Text>{list?.user?.name}</Text>
            </AuthorWrapper>
          </Section>
        );
      })}
    </Main>
  );
};

export default TourListPresenter;
