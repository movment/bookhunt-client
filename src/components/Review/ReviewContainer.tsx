import React, { useState } from 'react';
import ReviewPresenter from './ReviewPresenter';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_REVIEWS, ADD_REVIEW } from './ReviewQueries';
import { GetReviews, AddReview } from '../../types/api';
import jwt from 'jsonwebtoken';
import { DocumentNode } from 'graphql';

interface IProps {
  bookId: number;
}

const ReviewContainer: React.SFC<IProps> = ({ bookId }) => {
  const token = localStorage.getItem('jwt');
  let userId;
  if (token) {
    userId = (jwt.decode(token) as any).id;
  }

  const [comment, onChange, setComment] = useInput('');
  const { data, refetch } = useQuery<GetReviews>(GET_REVIEWS, {
    variables: {
      bookId,
    },
  });

  const onSubmit = useSubmit(
    ADD_REVIEW,
    { bookId, comment, rating: 'THREE' },
    () => {
      setComment('');
      refetch();
    },
  );
  return (
    <ReviewPresenter
      reviews={data?.GetReviews.reviews}
      comment={comment}
      onChange={onChange}
      onSubmit={onSubmit}
      userId={userId}
    />
  );
};

export default ReviewContainer;

// custom hooks
const useInput = (
  str: string,
): [
  string,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  (str) => void,
] => {
  const [comment, setComment] = useState(str);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setComment(value);
  };
  return [comment, onChange, setComment];
};

const useSubmit = (node: DocumentNode, variables, onCompleted) => {
  const [mutation] = useMutation<AddReview>(node, {
    onCompleted: onCompleted,
  });
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    mutation({
      variables,
    });
  };

  return onSubmit;
};

// const [addReivew] = useMutation<AddReview>(ADD_REVIEW, {
//   onCompleted: () => {
//     setComment('');
//     refetch();
//   },
// });
// const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
//   event.preventDefault();
//   addReivew({
//     variables: {
//       bookId,
//       comment,
//       rating: 'THREE',
//     },
//   });
// };
