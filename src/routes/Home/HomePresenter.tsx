import React from 'react';
import styled from 'styled-components';
import Input from '../../components/Input';
import { SearchBooks_SearchBooks_books } from '../../types/api';
import SearchInput from '../../components/SearchInput';

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
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
// const Search = styled(Input)`
//   box-shadow: 2px 2px 3px 1px rgba(41, 41, 41, 0.2);
// `;
// const Ul = styled.ul<any>`
//   display: ${(props) => props.display || 'none'};
//   position: absolute;
//   padding: 20px 0;
//   width: 500px;
//   box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
//   border-radius: 5px;
//   z-index: -1;
// `;
// const Li = styled.li`
//   display: flex;
//   padding: 20px;
//   cursor: pointer;
//   border-radius: 3px;

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.05);
//   }
// `;
// const Info = styled.div`
//   padding: 20px;
// `;
// const Img = styled.img`
//   width: 100px;
// `;
const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
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
      <Footer>
        <span>{'<b>서비스 이용약관</b>'.replace(/<\/?[^>]+(>|$)/g, '')}</span>
      </Footer>
    </Container>
  );
};

export default HomePresenter;
