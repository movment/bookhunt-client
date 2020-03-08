import React, { useState, ChangeEventHandler, FormEventHandler } from 'react';
import HomePresenter from './HomePresenter';
import { SEARCH_BOOKS } from './HomeQueries';
import { useLazyQuery } from '@apollo/react-hooks';
import { SearchBooks } from '../../types/api';
import { RouteComponentProps } from 'react-router-dom';
import Text from '../../components/Text';
import Highlight from '../../components/Highlight';

const HomeContainer: React.SFC<RouteComponentProps> = ({ history }) => {
  const [title, setTitle] = useState('');
  const [timer, setTimer] = useState(0);
  const [searchBooks, { data }] = useLazyQuery<SearchBooks>(SEARCH_BOOKS, {
    onCompleted: () => setCalled(true),
  });
  const [called, setCalled] = useState(false);
  // const highlight =
  //   title &&
  //   data?.SearchBooks.books?.map((book) => {
  //     const sTitle = book?.title.split(title);
  //     if ((sTitle?.length as number) > 1)
  //       return (
  //         <span>
  //           {sTitle?.map((cur, index) => {
  //             if (index > 0)
  //               return (
  //                 <span key={`${cur}${index}`}>
  //                   <Text style={{ color: 'orange' }}>{title}</Text>
  //                   {cur}
  //                 </span>
  //               );
  //             return <span key={`${cur}${index}`}>{cur}</span>;
  //           })}
  //         </span>
  //       );
  //     return book?.title;
  //   });
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
