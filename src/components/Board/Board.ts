import styled from 'styled-components';

export default styled.div<any>`
  display: block;
  flex-direction: column;
  /* padding: 20px; */
  border-radius: 10px;
  height: 300px;
  width: 200px;
  /* margin: 30px 30px; */
  background-image: url(${(props) => props.image});
  background-size: cover;
  /* align-items: flex-start;
  justify-content: space-between; */
  box-shadow: 0px 0px 6px 0px inset;
`;
