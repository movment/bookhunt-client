import React, { useState, ChangeEventHandler, FormEventHandler } from 'react';
import HomePresenter from './HomePresenter';
import { SEARCH_BOOKS } from './HomeQueries';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { SearchBooks } from '../../types/api';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import Highlight from '../../components/Highlight';
import { useCookies } from 'react-cookie';
import { USER_SIGN_IN } from '../../queries/queries.local';
import { useApolloClient } from '@apollo/react-hooks';
const HomeContainer: React.SFC<RouteComponentProps> = ({ history }) => {
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const client = useApolloClient();
  const [title, setTitle] = useState('');
  const [timer, setTimer] = useState(0);
  const [searchBooks, { data }] = useLazyQuery<SearchBooks>(SEARCH_BOOKS, {
    onCompleted: () => setCalled(true),
  });
  const [called, setCalled] = useState(false);

  if (cookies.jwt && !localStorage.getItem('jwt')) {
    console.log('jwt');
    localStorage.setItem('jwt', cookies.jwt);
    removeCookie('jwt');
    client.writeData({
      data: {
        auth: {
          __typename: 'Auth',
          isLoggedIn: true,
        },
      },
    });
  }
  const highlight =
    title &&
    data?.SearchBooks.books?.map((book, i) => {
      const split = book?.title.split(title as string);

      return split?.map((cur, index) => {
        return (
          <React.Fragment key={`${i}${index}`}>
            {index > 0 ? (
              <>
                <Highlight>{title}</Highlight>
                {cur}
              </>
            ) : (
              cur
            )}
          </React.Fragment>
        );
      });
    });
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (timer) {
      clearTimeout(timer);
    }

    const {
      target: { value },
    } = event;
    setTitle(value);
    setCalled(false);
    let newTimer;
    if (value) {
      newTimer = setTimeout(
        () => searchBooks({ variables: { title: value, max: 3 } }),
        500,
      );
      setTimer(newTimer);
    }
  };
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (timer) {
      clearTimeout(timer);
    }
    history.push(`/search?query=${title}`);
  };
  const handleClick = (bookId: number) => {
    history.push(`/book/${bookId}`);
  };
  return (
    <HomePresenter
      title={title}
      books={data?.SearchBooks.books}
      called={called}
      highlight={highlight}
      onChange={onChange}
      onSubmit={onSubmit}
      handleClick={handleClick}
    />
  );
};

export default HomeContainer;
