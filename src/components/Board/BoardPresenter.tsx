import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import Text from '../Text';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const BoardWrapper = styled.main`
  margin: 0 auto;
  width: 75%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 800px;
`;
const Section = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 250px;
  margin: 25px;
  padding: 25px;
  border-radius: 10px;
  &:hover {
    background-color: rgba(15, 15, 15, 0.1);
    transition: 0.3s;
  }
`;

const TitleWrapper = styled.div`
  margin-top: 10px;
`;
const AuthorWrapper = styled.div`
  margin-top: 10px;
`;
const BookImage = styled.div<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  line-height: 32px;
  border-radius: 10px;
  height: ${(props) => props.height || '300px'};
  width: ${(props) => props.width || '200px'};
  background-image: url(${(props) => props.image});
  background-size: cover;
  box-shadow: 0px 0px 6px 0px inset;
`;

interface IProps {
  books?: any[] | undefined | null;
  lists?: any[] | undefined | null;
  width?: string;
  height?: string;
}
const BordPresenter: React.SFC<IProps> = ({ books, lists, width, height }) => {
  const url = books ? '/book/' : '/list/';
  return (
    <>
      {(books || lists)?.map((content) => {
        return (
          <Section to={url + content?.id} key={content?.id}>
            <BookImage
              to={url + content?.id}
              key={content?.id}
              image={content?.image}
              width={width}
              height={height}
            />
            <TitleWrapper>
              <Title type="small">{content?.title}</Title>
            </TitleWrapper>
            <AuthorWrapper>
              <Text>{content?.author || content?.user?.name}</Text>
            </AuthorWrapper>
          </Section>
        );
      })}
    </>
  );
};

export const BoardButton = ({ onClick }) => (
  <Section to="#" onClick={onClick}>
    <BookImage style={{ backgroundColor: '#d4f8e8' }}>
      <FontAwesomeIcon icon={faPlus} />
    </BookImage>
    <TitleWrapper>
      <Title type="small"></Title>
    </TitleWrapper>
    <AuthorWrapper>
      <Text></Text>
    </AuthorWrapper>
  </Section>
);

export default BordPresenter;
