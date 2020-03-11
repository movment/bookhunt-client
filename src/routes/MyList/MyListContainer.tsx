import React, {
  useState,
  MouseEventHandler,
  FormEventHandler,
  ChangeEventHandler,
} from 'react';
import MyListPresenter from './MyListPresenter';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_MY_LIST, ADD_BOOK_LIST } from './MyListQueries';
import { GetLists, AddBookList } from '../../types/api';
import Title from '../../components/Title';
import { ADD_BOOK_LIST_IN_CACHE } from './MyListQueries.local';

const MyListContainer = () => {
  const { data, error, loading } = useQuery<GetLists>(GET_MY_LIST, {
    variables: {
      type: 'MY',
    },
  });
  const [addList] = useMutation(ADD_BOOK_LIST_IN_CACHE, {});
  const [addBookList] = useMutation<AddBookList>(ADD_BOOK_LIST, {
    onCompleted: ({ AddBookList }) => {
      addList({
        variables: {
          id: AddBookList.list?.id,
          title: AddBookList.list?.title,
        },
      });
      setClicked(false);
    },
  });
  const [clicked, setClicked] = useState(false);
  const [title, setTitle] = useState('');
  if (loading) {
    return <Title>Loading...</Title>;
  }
  if (error) {
    return <Title>Error...</Title>;
  }
  const onClick: MouseEventHandler<HTMLDivElement> = (event) => {
    setClicked(!clicked);
  };
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (title !== '') {
      addBookList({
        variables: {
          title,
        },
      });
      setTitle('');
    }
  };
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };
  return (
    <MyListPresenter
      lists={data?.GetLists.lists}
      clicked={clicked}
      title={title}
      onClick={onClick}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default MyListContainer;
