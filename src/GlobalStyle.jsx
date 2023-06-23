import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Goyang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  * {
font-family :'Goyang';
  }

  body {
    background-color: #f5f5f5;
    font-family :'Goyang';

  }
`;

export default GlobalStyle;
