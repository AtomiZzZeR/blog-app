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
  body::-webkit-scrollbar {
    width: 6px;         
  }
  body::-webkit-scrollbar-track {
    background: #222;       
  }
  body::-webkit-scrollbar-thumb {
    background-color: #ff6b6b;    
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
