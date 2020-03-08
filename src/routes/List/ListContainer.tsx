import React, { useState, ChangeEventHandler, MouseEventHandler } from 'react';
import ListPresenter from './ListPresenter';
import { SEARCH_BOOK, TOGGLE_ADD } from './ListQueries.local';
import { useLazyQuery, useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_BOOK_IN_LIST, GET_BOOKS_IN_LIST } from './ListQueries';
import { RouteComponentProps } from 'react-router-dom';
import { GetBooksInList } from '../../types/api';

interface IParams {
  id: string;
}
const ListContainer: React.SFC<RouteComponentProps<IParams>> = ({ match }) => {
  const { data: books } = useQuery<GetBooksInList>(GET_BOOKS_IN_LIST, {
    variables: {
      listId: parseInt(match.params.id),
    },
  });
  const [title, setTitle] = useState('');
  const [searchBook, { data }] = useLazyQuery(SEARCH_BOOK);
  const [toggleAdded] = useMutation(TOGGLE_ADD);
  const [addBookInList] = useMutation(ADD_BOOK_IN_LIST);
  const [timer, setTimer] = useState(0);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (timer) {
      clearTimeout(timer);
    }
    const {
      target: { value },
    } = event;
    setTitle(value);
    setTimer(
      setTimeout(
        () =>
          searchBook({
            variables: {
              max: 5,
              title: value,
            },
          }),
        500,
      ),
    );
  };
  const toggle = async (bookId: number, isAdded: boolean) => {
    await addBookInList({
      variables: {
        bookId,
        listId: parseInt(match.params.id),
      },
    });
    toggleAdded({
      variables: {
        bookId,
        isAdded,
      },
    });
  };
  const [clicked, setClicked] = useState(false);
  const onClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setClicked(!clicked);
  };
  return (
    <ListPresenter
      title={title}
      search={data?.SearchBooks.books}
      books={books?.GetBooksInList.books}
      onChange={onChange}
      toggle={toggle}
      clicked={clicked}
      onClick={onClick}
    />
  );
};

export default ListContainer;
