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

  html {
    background-color: #222;
  }

  body {
    font-family: Arial, Helvetica, sans-serif; 
  }

  a {
    text-decoration: none;
  }

  .focus,
  .active {
    outline: none;
  }
  
`;

export default GlobalStyles;
