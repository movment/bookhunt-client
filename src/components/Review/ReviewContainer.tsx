import React, { useState } from 'react';
import ReviewPresenter from './ReviewPresenter';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_REVIEWS, ADD_REVIEW, DEL_REVIEW } from './ReviewQueries';
import { GetReviews } from '../../types/api';
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

  const { data, refetch } = useQuery<GetReviews>(GET_REVIEWS, {
    variables: {
      bookId,
    },
    fetchPolicy: 'network-only',
  });

  const [comment, onChange, setComment] = useInput('');
  const handleSubmit = useSubmit(ADD_REVIEW, {
    variables: { bookId, comment, rating: 'THREE' },
    onCompleted: () => {
      setComment('');
      refetch();
    },
  });
  const handleClick = useClick(DEL_REVIEW, {
    onCompleted: () => {
      refetch();
    },
  });
  return (
    <ReviewPresenter
      userId={userId}
      reviews={data?.GetReviews.reviews}
      comment={comment}
      onChange={onChange}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
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

const useSubmit = (node: DocumentNode, options?) => {
  const [mutation] = useMutation(node, options);
  const handleSubmit = (opt = {}) => {
    mutation(opt);
  };

  return handleSubmit;
};

const useClick = (node: DocumentNode, options?) => {
  const [mutation] = useMutation(node, options);
  const handleClick = (opt = {}) => {
    mutation(opt);
  };
  return handleClick;
};
