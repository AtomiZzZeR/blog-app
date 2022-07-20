import { createGlobalStyle } from 'styled-components';

const colorOrange = '#ff6b6b';
const colorBlack = '#222';

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
    background-color: ${colorBlack};
  }

  body {
    font-family: Arial, Helvetica, sans-serif; 
    color: #fff;
    font-weight: bold;
  }
  body::-webkit-scrollbar {
    width: 6px;         
  }
  body::-webkit-scrollbar-track {
    background: ${colorBlack};
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${colorOrange};    
    border-radius: 50px;       
  }

  a {
    text-decoration: none;
  }

  .focus,
  .active {
    outline: none;
  }

  button {
    cursor: pointer;
  }
  
`;

export default GlobalStyles;
