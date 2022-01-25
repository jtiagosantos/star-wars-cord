import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1000px) {
      font-size: 93.75%; //15px
    }
    @media(max-width: 720px) {
      font-size: 87.5%; //14px;
    }
  }

  body {
    width: 100vw;
    height: 100vh;

    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;

    background: url('https://live.staticflickr.com/5231/14137284401_4f06e9f8c6_b.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;