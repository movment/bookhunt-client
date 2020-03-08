import React from 'react';
import { GetLists_GetLists_lists } from '../../types/api';
import Button from '../../components/Button';
import styled from 'styled-components';
import Form from '../../components/Form';
import Input from '../../components/Input';
import SLink from '../../components/SLink';

interface IProps {
  lists: (GetLists_GetLists_lists | null)[] | null | undefined;
  clicked: boolean;
  title: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Modal = styled.div<any>`
  display: ${(props) => (props.clicked ? 'block' : 'none')};
  position: fixed;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* opacity: 0.5; */
  background-color: white;
`;

const MyListPresenter: React.SFC<IProps> = ({
  lists,
  clicked,
  title,
  onClick,
  onChange,
  onSubmit,
}) => {
  return (
    <>
      <div>
        <Button onClick={onClick}>+</Button>
      </div>
      {clicked && (
        <Container onClick={onClick}>
          <Modal
            clicked={clicked}
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
            }}
          >
            <Form onSubmit={onSubmit}>
              <Input placeholder="title" value={title} onChange={onChange} />
              <Button>만들기</Button>
            </Form>
          </Modal>
        </Container>
      )}
      <div>
        {lists?.map((list) => (
          <SLink to={`/list/${list?.id}`} key={list?.id}>
            {list?.title}
          </SLink>
        ))}
      </div>
    </>
  );
};

export default MyListPresenter;
