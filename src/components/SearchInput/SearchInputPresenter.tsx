import React from 'react';
import { SearchBooks_SearchBooks_books } from '../../types/api';
import styled from 'styled-components';
import Text from '../Text';
import Input from '../Input';

const Search = styled(Input)`
  box-shadow: 2px 2px 3px 1px rgba(41, 41, 41, 0.2);
  position: relative;
  z-index: 10;
`;
const Ul = styled.ul<any>`
  display: ${(props) => props.display || 'none'};
  position: absolute;
  padding: 20px 0;
  width: 500px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 1;
  background-color: white;
  overflow-y: auto;
  max-height: 500px;
`;
const Li = styled.li`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
const Info = styled.div`
  padding: 20px;
`;
const Img = styled.img`
  width: 100px;
`;

interface IProps {
  title: string;
  books: (SearchBooks_SearchBooks_books | null)[] | null | undefined;
  called: boolean;
  highlight: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleClick: (bookId: number) => void;
}
const SearchInputPresenter: React.SFC<IProps> = ({
  title,
  books,
  called,
  onChange,
  onSubmit,
  onBlur,
  onFocus,
  highlight,
  handleClick,
  children,
}) => {
  return (
    <div onClick={(event) => event.stopPropagation()}>
      <form onSubmit={onSubmit} style={{ width: '500px' }}>
        <Search
          placeholder="책을 검색해보세요."
          value={title}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </form>
      <Ul display={called ? 'block' : 'none'}>
        {title &&
          books?.map((book, index) => {
            return (
              <Li
                key={book?.id}
                onMouseDown={() => handleClick(book?.id as number)}
              >
                <div>
                  <Img src={book?.image || ''} alt="book" />
                </div>
                <Info>
                  {/* <span>{book?.title}</span> */}
                  <div>{highlight[index]}</div>
                  <div style={{ marginTop: '20px' }}>
                    <Text
                      style={{
                        paddingRight: '10px',
                      }}
                    >
                      {book?.author}
                    </Text>
                    <Text
                      style={{
                        borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
                        paddingLeft: '10px',
                      }}
                    >
                      {book?.publisher}
                    </Text>
                  </div>
                </Info>
              </Li>
            );
          })}
      </Ul>
    </div>
  );
};

export default SearchInputPresenter;
