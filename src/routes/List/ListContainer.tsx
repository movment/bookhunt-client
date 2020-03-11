import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import ListPresenter from './ListPresenter';
import { GET_BOOKS_IN_LIST, ADD_BOOK_IN_LIST } from './ListQueries';
import { RouteComponentProps } from 'react-router-dom';
import { GetBooksInList } from '../../types/api';

interface IParams {
  id: string;
}

const ListContainer: React.SFC<RouteComponentProps<IParams>> = ({ match }) => {
  const { data, refetch } = useQuery<GetBooksInList>(GET_BOOKS_IN_LIST, {
    variables: {
      listId: parseInt(match.params.id),
    },
    fetchPolicy: 'network-only',
  });
  console.log(data);
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
      books={data?.GetBooksInList.books}
      clicked={clicked}
      onClick={onClick}
      handleClick={handleClick}
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
