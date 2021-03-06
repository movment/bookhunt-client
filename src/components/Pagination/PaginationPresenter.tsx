import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.nav`
  /* width: 50%; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin: 0 auto;
`;
const Ul = styled.ul<any>`
  display: flex;
  background-clip: padding-box;
  & > li:nth-child(${(props) => props.page + 1}) > a {
    background-color: rgb(254, 78, 18);
    color: white;
  }
`;
const Li = styled.li``;
const PLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 5px;
  padding: 5px;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;
interface IProps {
  page: number;
  max: number;
  to: string;
  sort: string;
}
const PaginationPresenter = ({ page = 1, max, to, sort }) => {
  const size = 5;
  const q = Math.floor((page - 1) / size);
  const r = ((page - 1) % size) + 1;
  const firstPage = q * size + 1;
  const lists = new Array(size).fill(0);
  // const qs = queryString.stringify({ sort, page });
  return (
    <Container>
      <Ul page={r}>
        <Li>
          <PLink
            to={`${to}?sort=${sort}&page=${
              firstPage - size > 0 ? firstPage - size : 1
            }`}
          >
            {'<'}
          </PLink>
        </Li>
        {lists.map((cur, index) => {
          const newPage = firstPage + index;

          if (!index || max > (newPage - 1) * 20) {
            console.log('TEST');
            return (
              <Li key={newPage}>
                <PLink to={`${to}?sort=${sort}&page=${newPage}`}>
                  {newPage}
                </PLink>
              </Li>
            );
          }
          return null;
        })}
        <Li>
          <PLink to={`${to}?sort=${sort}&page=${firstPage + size}`}>
            {'>'}
          </PLink>
        </Li>
      </Ul>
    </Container>
  );
};

export default PaginationPresenter;
