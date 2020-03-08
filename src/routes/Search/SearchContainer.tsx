import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import queryString from 'query-string';
import SearchPresenter from './SearchPresenter';
import { useQuery } from '@apollo/react-hooks';
import { SEARCH_DETAIL } from './SearchQueries';
import { SearchDetail } from '../../types/api';
import Highlight from '../../components/Highlight';

const SearchContainer: React.SFC<RouteComponentProps> = ({
  history,
  location,
}) => {
  const { query = '' } = queryString.parse(location.search);
  const { data, loading } = useQuery<SearchDetail>(SEARCH_DETAIL, {
    variables: { title: query, max: 25 },
  });

  const [title, setTitle] = useState(query);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      target: { value },
    } = event;

    setTitle(value);
  };
  const handleClick = (bookId: number) => {
    history.push(`/book/${bookId}`);
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  const highlight = data?.SearchBooks.books?.map((book, i) => {
    const split = book?.title.split(query as string);

    return split?.map((cur, index) => {
      return (
        <React.Fragment key={`${i}${index}`}>
          {index > 0 ? (
            <>
              <Highlight>{query}</Highlight>
              {cur}
            </>
          ) : (
            cur
          )}
        </React.Fragment>
      );
    });
  });

  return (
    <SearchPresenter
      books={data?.SearchBooks.books}
      highlight={highlight}
      handleClick={handleClick}
    />
  );
};

export default SearchContainer;
