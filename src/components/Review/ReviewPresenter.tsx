import React from 'react';
import Form from '../Form';
import Button from '../Button';
import { GetReviews_GetReviews_reviews } from '../../types/api';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  reviews: (GetReviews_GetReviews_reviews | null)[] | null | undefined;
  comment: string;
  onChange: (event) => void;
  onSubmit: (event) => void;
  userId: number;
}

const FormContainer = styled.div`
  /* height: 200px; */
  margin: 0 auto;
`;
const TextArea = styled.textarea`
  width: 80%;
  height: 64px;
  margin: 0 auto;
  padding: 5px;

  font-size: 16px;
  line-height: 16px;

  resize: none;
`;
const Ul = styled.ul`
  overflow-x: hidden;
  max-height: 600px;
  width: 100%;
`;
const Li = styled.li`
  /* height: 50px; */
  /* line-height: 50px; */
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
  display: flex;
  /* align-items: center; */
`;
const Review = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const Comment = styled.span`
  display: inline-block;
  width: 80%;
  line-height: 18px;
`;
const Name = styled.span`
  display: inline-block;
  width: 20%;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6);
`;
const Del = styled.button`
  margin-top: 20px;
  height: 12px;
  font-size: 13px;
  cursor: pointer;
  background-color: transparent;
  border: transparent;
  text-align: center;
  outline: none;
  &:active {
    transform: scale(1.2);
    color: rgba(0, 0, 0, 0.3);
  }
`;
const ReviewPresenter: React.SFC<IProps> = ({
  reviews,
  comment,
  onChange,
  onSubmit,
  userId,
}) => {
  return (
    <FormContainer>
      <div>
        <Form onSubmit={onSubmit}>
          <TextArea placeholder="댓글" onChange={onChange} value={comment} />
          <Button>리뷰</Button>
        </Form>
      </div>
      <div>
        <Ul>
          {reviews?.map((review) => (
            <Li key={review?.id}>
              <Review>
                <Name>{review?.user?.name}</Name>
                <Comment>{review?.comment}</Comment>
              </Review>
              {review?.user?.id === userId && (
                <Del>
                  <FontAwesomeIcon icon={faBan} />
                </Del>
              )}
            </Li>
          ))}
        </Ul>
      </div>
    </FormContainer>
  );
};

export default ReviewPresenter;
