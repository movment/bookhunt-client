import React from 'react';
import { SearchDetail_SearchBooks_books } from '../../types/api';
import styled from 'styled-components';
import Title from '../../components/Title';
import Text from '../../components/Text';
import SearchInput from '../../components/SearchInput';

const Container = styled.div`
  /* width: 70%; */
  margin: 0 auto;
`;
const UlBook = styled.ul`
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  height: 100vh;
`;
const LiBook = styled.li`
  display: flex;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition-duration: 0.3s;
  }
`;
const ImgBook = styled.img`
  width: 150px;
  /* margin-right: 20px; */
`;
const Detail = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  width: 70%;
  padding: 20px;
`;
const Description = styled.p`
  margin-top: 20px;
`;
interface IProps {
  books: (SearchDetail_SearchBooks_books | null)[] | null | undefined;
  highlight: any;
  handleClick: (bookId: number) => void;
}

const SearchPresenter: React.SFC<IProps> = ({
  books,
  highlight,
  handleClick,
}) => {
  return (
    <Container>
      <div style={{ width: '70%', margin: '0 auto' }}>
        <SearchInput />
      </div>
      <div
        style={{
          backgroundColor: 'rgba(150, 150, 150, 0.08)',
        }}
      >
        <UlBook>
          {books?.map((book, index) => (
            <LiBook
              key={book?.id}
              onClick={() => {
                handleClick(book?.id as number);
              }}
            >
              <div>
                <ImgBook src={book?.image || ''} />
              </div>
              <Detail>
                <Title type="small">{highlight[index]}</Title>

                <div style={{ marginTop: '10px' }}>
                  <Text>{book?.author} | </Text>
                  <Text>{book?.publisher}</Text>
                </div>
                <Description>{book?.description}</Description>
              </Detail>
            </LiBook>
          ))}
        </UlBook>
      </div>
    </Container>
  );
};

export default SearchPresenter;
