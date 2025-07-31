import { css } from '@emotion/react';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #000000;
    color: #ffffff;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    section {
      padding: 2rem 1rem;
    }
  }
`; 