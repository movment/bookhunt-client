import React from 'react';
import { GetLists_GetLists_lists } from '../../types/api';
import Button from '../../components/Button';
import styled from 'styled-components';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { Board, BoardWrapper, BoardButton } from '../../components/Board';
import SearchInput from '../../components/SearchInput';
import Pagination from '../../components/Pagination';

interface IProps {
  lists: (GetLists_GetLists_lists | null)[] | null | undefined;
  clicked: boolean;
  title: string;
  onClick: (event) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  page: string;
  max: number;
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 1000;
`;
const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 20%;
  /* height: 30%; */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.6);
`;
const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const MyListPresenter: React.SFC<IProps> = ({
  lists,
  clicked,
  title,
  onClick,
  onChange,
  onSubmit,
  max,
  page,
}) => {
  return (
    <div>
      {clicked && (
        <Container onClick={onClick}>
          <Modal
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
            }}
          >
            <Form onSubmit={onSubmit}>
              <FormInner>
                <span>서재 이름</span>
                <Input placeholder="title" value={title} onChange={onChange} />
                <Button>만들기</Button>
              </FormInner>
            </Form>
          </Modal>
        </Container>
      )}
      <div>
        <div style={{ width: '70%', margin: '0 auto' }}>
          <SearchInput />
        </div>
        <div style={{ minHeight: '800px' }}>
          <BoardWrapper>
            <BoardButton onClick={onClick} />
            <Board lists={lists} />
          </BoardWrapper>
          <Pagination
            to="/mylist"
            sort="pubdate"
            max={max}
            page={parseInt(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default MyListPresenter;
