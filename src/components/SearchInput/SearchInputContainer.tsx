import React, { useState, InputHTMLAttributes } from 'react';
import SearchInputPresenter from './SearchInputPresenter';
import Highlight from '../Highlight';
import { SearchBooks } from '../../types/api';
import { useLazyQuery } from '@apollo/react-hooks';
import { SEARCH_BOOKS } from '../../routes/Home/HomeQueries';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps {
  onClick?: (event: React.MouseEvent) => void;
}
const SearchInputContainer: React.SFC<RouteComponentProps & IProps> = ({
  history,
  children,
}) => {
  const [title, setTitle] = useState('');
  const [timer, setTimer] = useState(0);
  const [searchBooks, { data }] = useLazyQuery<SearchBooks>(SEARCH_BOOKS, {
    onCompleted: () => setCalled(true),
  });
  const [called, setCalled] = useState(false);

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
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
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
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (timer) {
      clearTimeout(timer);
    }
    history.push(`/search?query=${title}`);
  };
  const onFocus: React.FocusEventHandler<HTMLInputElement> = (event) => {
    if (title) setCalled(true);
  };
  const onBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
    setCalled(false);
  };
  const handleClick = (bookId: number) => {
    console.log(history);
    history.push(`/book/${bookId}`);
  };
  console.log(children);
  return (
    <SearchInputPresenter
      title={title}
      books={data?.SearchBooks.books}
      called={called}
      highlight={highlight}
      onChange={onChange}
      onSubmit={onSubmit}
      onBlur={onBlur}
      onFocus={onFocus}
      handleClick={handleClick}
    >
      {children}
    </SearchInputPresenter>
  );
};

export default withRouter(SearchInputContainer);
