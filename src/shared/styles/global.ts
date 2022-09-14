import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --toastify-color-progress-success: #27C383;
    --toastify-color-progress-warning:#FBA94C;
    --toastify-color-progress-error: #AB222E;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #313136;
    font-family: 'Open Sans', sans-serif;
  }

  body{
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  body, input, textarea, button{
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  @media (max-width: 768px){
    :root{
      font-size: 14px;
    }
  }

  @media (max-width: 480px){
    :root{
      font-size: 13px;
    }
  }
`;
