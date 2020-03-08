import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Text from '../../components/Text';
import { GetBook_GetBooks_books } from '../../types/api';
import Form from '../../components/Form';
import SearchInput from '../../components/SearchInput';
import Review from '../../components/Review';

interface IProps {
  books: (GetBook_GetBooks_books | null)[] | null | undefined;
  isFav: boolean | undefined | null;
  onClick: () => void;
  bookId: number;
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 75%;
  display: flex;
  padding-left: 10%;
  align-items: center;
  flex-wrap: 'wrap';
`;
const Content = styled.div`
  margin-left: 100px;
  height: 450px;
  justify-content: center;
`;
const Description = styled.div`
  display: flex;
  width: 75%;
  margin: 0 auto;
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BookImg = styled.img`
  width: 300px;
  height: 450px;
  position: relative;
  z-index: -1;
`;
const IntroContainer = styled.div`
  width: 50%;
  padding-bottom: 20px;
  margin-bottom: 50px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.15);
`;
const IntroTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
`;
const IntroContent = styled.div`
  line-height: 24px;
`;
const BookPresenter: React.SFC<IProps> = ({
  books,
  isFav,
  onClick,
  bookId,
}) => {
  const book = books?.[0];
  return (
    <>
      <div style={{ width: '70%', margin: '0 auto' }}>
        <SearchInput />
      </div>
      <Container>
        <div
          style={{
            boxShadow: '0px 0px 6px 0px inset',
          }}
        >
          <BookImg src={book?.image as string} alt="Book"></BookImg>
        </div>
        <Content>
          <div style={{ marginTop: '80px' }}>
            <Title>{book?.title}</Title>
          </div>
          <div style={{ marginTop: '30px' }}>
            <Text>{book?.author}</Text>
          </div>
          <div style={{ marginTop: '30px' }}>
            <Text>{book?.publisher}</Text>
          </div>
          <div style={{ marginTop: '30px' }}>
            <a
              href={book?.link as string}
              target="_blank"
              rel="noopener noreferrer"
            >
              네이버에서 보기
            </a>
          </div>
          <div style={{ marginTop: '30px' }}>
            <Button onClick={onClick} style={{ width: '100px' }}>
              {isFav ? '나중에 읽기' : '읽고 싶어요'}
            </Button>
          </div>
        </Content>
      </Container>

      <Description>
        <IntroContainer>
          <IntroTitle>
            <span>책 소개</span>
          </IntroTitle>
          <IntroContent>
            <span>{book?.description === '' ? '😧' : book?.description}</span>
          </IntroContent>
        </IntroContainer>
        <div style={{ width: '50%' }}>
          <IntroTitle>
            <span>리뷰</span>
          </IntroTitle>
          {/* <Fieldset>
            <Full>
              <input type="radio" />
            </Full>
            <Full>
              <input type="radio" />
            </Full>
            <Full>
              <input type="radio" />
            </Full>
            <Full>
              <input type="radio" />
            </Full>
            <Full>
              <input type="radio" />
            </Full>
          </Fieldset> */}
          {/* <div>
            <Form onSubmit={onSubmit}>
              <textarea
                placeholder="댓글"
                onChange={onChange}
                value={comment}
                style={{ resize: 'vertical' }}
              />
              <Button>리뷰</Button>
            </Form>
          </div>
          <ul>
            {book?.reviews?.map((cur) => (
              <li key={cur?.id}>
                <div>
                  <span>{cur?.comment}</span>
                  <span>{cur?.user?.name}</span>
                </div>
              </li>
            ))}
          </ul> */}
          <Review bookId={bookId} />
        </div>
        <div style={{ marginTop: '100px' }}>이 작품이 담긴 리스트</div>
      </Description>
    </>
  );
};

export default BookPresenter;
