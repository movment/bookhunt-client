import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  margin: 15px 10px;
  display: block;
  height: 40px;
  line-height: 40px;
  color: inherit;
  border-radius: 10px;
  padding: 0 5px;
  &:hover {
    background-color: rgba(150, 150, 150, 0.1);
    transition: 0.3s;
  }
  &:active {
    opacity: 0.8;

    transition: 0.1s;
    transform: scale(1.03);
  }
`;
