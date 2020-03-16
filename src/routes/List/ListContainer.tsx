import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import ListPresenter from './ListPresenter';
import jwt from 'jsonwebtoken';
import { GET_BOOKS_IN_LIST, ADD_BOOK_IN_LIST } from './ListQueries';
import { RouteComponentProps } from 'react-router-dom';
import { GetBooksInList } from '../../types/api';

interface IParams {
  id: string;
}

const ListContainer: React.SFC<RouteComponentProps<IParams>> = ({ match }) => {
  const token = localStorage.getItem('jwt');
  let userId = token && (jwt.decode(token) as any).id;

  const { data, refetch } = useQuery<GetBooksInList>(GET_BOOKS_IN_LIST, {
    variables: {
      listId: parseInt(match.params.id),
    },
    fetchPolicy: 'network-only',
  });
  const [addBookInList] = useMutation(ADD_BOOK_IN_LIST, {
    onCompleted: () => {
      refetch();
    },
  });
  const handleClick = (bookId: number) => {
    addBookInList({
      variables: { listId: parseInt(match.params.id), bookId },
    });
  };
  const [clicked, onClick] = useModal(false);

  return (
    <ListPresenter
      auth={userId === data?.GetBooksInList.list?.user.id}
      books={data?.GetBooksInList.books}
      clicked={clicked}
      onClick={onClick}
      handleClick={handleClick}
      title={data?.GetBooksInList.list?.title as string}
      user={data?.GetBooksInList.list?.user}
    />
  );
};

export default ListContainer;

// custom hooks
const useModal = (bool: boolean): [boolean, () => void] => {
  const [clicked, setClicked] = useState(bool);
  const onClick = () => {
    setClicked(!clicked);
  };
  return [clicked, onClick];
};
