import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/light.jpg";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}
body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
* {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  > p {
    color: #000;
  }

  .score {
    color: #000;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(90deg, #d9d7d7, #ededed);
    border: 3px solid #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    height: 40px;
    border-radius: 10px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
