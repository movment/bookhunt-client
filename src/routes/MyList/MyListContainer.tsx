import React, {
  useState,
  MouseEventHandler,
  FormEventHandler,
  ChangeEventHandler,
} from 'react';
import queryString from 'query-string';
import MyListPresenter from './MyListPresenter';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_MY_LIST, ADD_BOOK_LIST } from './MyListQueries';
import { GetLists } from '../../types/api';
import Title from '../../components/Title';
import { ADD_BOOK_LIST_IN_CACHE } from './MyListQueries.local';
import { RouteComponentProps } from 'react-router-dom';

const MyListContainer: React.SFC<RouteComponentProps> = ({
  location: { search },
}) => {
  const { page = '1' } = queryString.parse(search);

  const { data, error, loading } = useQuery<GetLists>(GET_MY_LIST, {
    variables: {
      type: 'MY',
      // sort: 'PUBDATE',
      page: parseInt(page as string),
    },
  });

  const [addList] = useMutation(ADD_BOOK_LIST_IN_CACHE, {});
  const [addBookList] = useMutation<any>(ADD_BOOK_LIST, {
    onCompleted: ({ AddBookList }) => {
      addList({
        variables: {
          id: AddBookList.list?.id,
          title: AddBookList.list?.title,
          page: parseInt(page as string),
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
      page={page as string}
      max={data?.GetLists.max as number}
    />
  );
};

export default MyListContainer;
