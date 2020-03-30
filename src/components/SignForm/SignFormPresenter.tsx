import React from 'react';
import styled from 'styled-components';
import Form from '../Form';

interface IProps {
  onSubmit: (event) => void;
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  /* width: 350px; */
  margin: 0 auto;

  & * {
    margin-bottom: 20px;
  }
`;
const SForm = styled(Form)`
  display: flex;
  width: 450px;
  height: 500px;
  flex-direction: column;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;
const SignFormPresenter: React.SFC<IProps> = ({ children, onSubmit }) => {
  return (
    <Container>
      <SForm onSubmit={onSubmit}>{children}</SForm>
    </Container>
  );
};

export default SignFormPresenter;
