import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to bottom, #6d9db1, #db82d0);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  ::-webkit-scrollbar {
    display: none;
    }
`;
