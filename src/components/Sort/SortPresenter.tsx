import React from 'react';
import SLink from '../SLink';
import styled from 'styled-components';
import Text from '../Text';

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-flow: row-reverse;
`;

const SortText = styled(Text)<any>`
  font-size: 14px;
  color: ${(props) => (props.clicked ? 'black' : '')};
`;
interface IProps {
  sort: string;
}
const SortPresenter: React.SFC<IProps> = ({ sort }) => {
  console.log(sort);
  return (
    <Container>
      <SLink to="/tour?sort=views">
        <SortText clicked={sort === 'views'}>인기도</SortText>
      </SLink>
      <SLink to="/tour?sort=pubdate">
        <SortText clicked={sort === 'pubdate'}>최신순</SortText>
      </SLink>
    </Container>
  );
};

export default SortPresenter;
