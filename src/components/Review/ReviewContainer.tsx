import React, { useState } from 'react';
import ReviewPresenter from './ReviewPresenter';
import { useQuery } from '@apollo/react-hooks';
import { GET_REVIEWS } from './ReviewQueries';
import { GetReviews } from '../../types/api';

interface IProps {
  bookId: number;
}

const ReviewContainer: React.SFC<IProps> = ({ bookId }) => {
  const [comment, onChange] = useInput('');
  const { data } = useQuery<GetReviews>(GET_REVIEWS, {
    variables: {
      bookId,
    },
  });

  return (
    <ReviewPresenter
      comment={comment}
      onChange={onChange}
      reviews={data?.GetReviews.reviews}
    />
  );
};

export default ReviewContainer;

const useInput = (
  str: string,
): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [comment, setComment] = useState(str);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setComment(value);
  };
  return [comment, onChange];
};
