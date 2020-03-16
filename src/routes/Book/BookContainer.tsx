import React from 'react';
import BookPresenter from './BookPresenter';
import { RouteComponentProps } from 'react-router-dom';
import { GetBook, AddFavorite } from '../../types/api';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Text from '../../components/Text';
import { GET_BOOK, ADD_FAV, GET_LISTS_OF_BOOK } from './BookQueries';
import { TOGGLE_FAV } from './BookQueries.local';

interface IParams {
  id: string;
}

const BookContainer: React.SFC<RouteComponentProps<IParams>> = ({
  match: { params },
}) => {
  const bookId = parseInt(params.id);
  const { loading, error, data } = useQuery<GetBook>(GET_BOOK, {
    variables: { bookId },
  });

  const [addFavorite] = useMutation<AddFavorite>(ADD_FAV, {
    variables: {
      bookId: parseInt(params.id),
    },
    onCompleted: () => {
      toggleFav();
    },
  });
  const [toggleFav] = useMutation(TOGGLE_FAV, {
    variables: {
      bookId: parseInt(params.id),
      isFav: data?.GetBooks?.books?.[0]?.isFav,
    },
  });
  const onClick = () => {
    addFavorite();
  };

  console.log(data);
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error...</Text>;
  }
  return (
    <BookPresenter
      books={data?.GetBooks?.books}
      isFav={data?.GetBooks?.books?.[0]?.isFav}
      onClick={onClick}
      bookId={bookId}
      lists={data?.GetListsOfBook.lists}
    />
  );
};

export default BookContainer;
