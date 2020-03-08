import React from 'react';
import Form from '../Form';
import Button from '../Button';
import { GetReviews_GetReviews_reviews } from '../../types/api';

interface IProps {
  comment: string;
  onChange: (event) => void;
  reviews: (GetReviews_GetReviews_reviews | null)[] | null | undefined;
}

const ReviewPresenter: React.SFC<IProps> = ({ comment, onChange, reviews }) => {
  return (
    <div>
      <div>
        <Form>
          <textarea
            placeholder="댓글"
            onChange={onChange}
            value={comment}
            // style={{ resize: 'vertical' }}
          />
          <Button>리뷰</Button>
        </Form>
      </div>
      <ul>
        {reviews?.map((review) => (
          <li key={review?.id}>
            <div>
              <span>{review?.comment}</span>
              <span>{review?.user?.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewPresenter;
