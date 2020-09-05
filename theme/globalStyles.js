import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    input, select, textarea {
      font-size: 16px;
    }
  }

  html {
    height:100%;
    font-family: 'Open Sans', sans-serif;
    
  }
`;

export default GlobalStyle;
