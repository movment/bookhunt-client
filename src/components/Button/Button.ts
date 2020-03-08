import styled from 'styled-components';
export default styled.button<any>`
  height: 40px;
  width: 80px;
  border-radius: 5px;
  border-style: hidden;
  outline: none;

  line-height: 40px;
  font-size: 18px;
  background-color: #0f4c81;
  color: white;

  cursor: pointer;

  &:hover {
    opacity: 0.6;

    transition: 0.2s;
  }
  &:active {
    opacity: 0.8;

    transition: 0.1s;
    transform: scale(1.03);
  }
`;
