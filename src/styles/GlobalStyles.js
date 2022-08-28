import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

body {
    max-height: 100vh;
    display: flex;
    flex-direction:column;
}

*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  /* background-color: rgba(155, 155, 155, 0.5); */
  background-color: #fff;
  border-radius: 20px;
  border: transparent;
}


`;

export default GlobalStyle;
