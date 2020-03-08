import styled from 'styled-components';

export default styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 400px;
  padding: 0 20px;
  border: 1px solid black;
  & > * {
    margin-top: 10px;
  }
`;
