import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body{
    font-family: 'Noto Sans KR', sans-serif;
    height: 100%;
    background-color: #F1F3F9;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  h1 {
      font-size: 2rem;
  }

  h2 {
      font-size: 1.5rem;
  }
  
`;

export default GlobalStyle;
