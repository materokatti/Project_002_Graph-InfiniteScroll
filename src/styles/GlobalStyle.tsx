import styled, {createGlobalStyle} from "styled-components";
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
      font-weight: 600;
  }

  h2 {
      font-size: 1.5rem;
      font-weight: 600;
  }

  span {
    font-weight: bold;
    font-size: 12px;
    color: rgb(112, 112, 112);
  }
  
`;

export default GlobalStyle;

export const TestPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const TestTitle = styled.h2`
  margin: 0.83em 0;
`;

// export const FlexBox = styled.div`
//   display: flex;
//   flex-direction: ${(props) => props.dir || "row"};
//   align-items: center;
// `;
