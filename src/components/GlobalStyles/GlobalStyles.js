import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background-color: #222;
    box-shadow: inset 0px 0px 20px 1px #000;
  }
  
`;

export default GlobalStyles;
