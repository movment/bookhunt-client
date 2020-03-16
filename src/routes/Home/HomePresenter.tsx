import React from 'react';
import styled from 'styled-components';
import { SearchBooks_SearchBooks_books } from '../../types/api';
import SearchInput from '../../components/SearchInput';

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  /* z-index: -1; */
  width: 100%;
`;
const Header = styled.header`
  position: relative;
  width: 100%;
  height: 400px;
  /* background-color: grey; */
  background-image: url('/unsplash.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 10%;
`;

const Title = styled.div`
  height: 370px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
`;

const Main = styled.main`
  /* float: left; */
  display: flex;
  height: 400px;
  flex-direction: column;
  align-items: center;
`;
const SearchWrapper = styled.div`
  width: 500px;
  transform: translateY(-20px);
`;

interface IProps {
  title: string;
  books: (SearchBooks_SearchBooks_books | null)[] | null | undefined;
  called: boolean;
  highlight: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleClick: (bookId: number) => void;
}

const HomePresenter: React.SFC<IProps> = ({
  title,
  books,
  called,
  onChange,
  onSubmit,
  highlight,
  handleClick,
}) => {
  return (
    <div style={{ height: '788px' }}>
      <Container>
        <Header>
          <Title>
            <span>BookHunt</span>
          </Title>
        </Header>
        <Main>
          <SearchWrapper>
            <SearchInput />
          </SearchWrapper>
        </Main>
      </Container>
    </div>
  );
};

export default HomePresenter;
