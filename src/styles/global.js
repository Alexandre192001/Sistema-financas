import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }

  html{
    scroll-behavior: smooth;
}

  body {
    font-family: 'Poppins', Sans-Serif;
  }
`;

export default Global;
