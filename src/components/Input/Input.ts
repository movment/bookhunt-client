import styled from 'styled-components';

interface IProps {
  value?: string;
}
export default styled.input<IProps>`
  display: block;
  padding: 0 10px;
  height: 40px;
  width: 100%;
  border-radius: 5px;
  border-style: hidden;
  outline: none;

  line-height: 40px;

  font-size: 18px;
  background-color: #f5f5f5;
`;
