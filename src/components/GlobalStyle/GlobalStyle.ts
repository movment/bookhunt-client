import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Nanum Gothic';
  }
  body {
    width:100%;
    /* margin: 0 auto; */
  }
  a {
    text-decoration:none;
    color:inherit;
  }
  #root{
  }
`;
