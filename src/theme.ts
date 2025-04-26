import { Theme } from '@emotion/react';

export const theme: Theme = {
  colors: {
    primary: '#ffffff',
    secondary: '#e0e0e0',
    text: '#ffffff',
    textSecondary: '#b0b0b0',
    accent: '#ffffff',
    background: '#000000',
    surface: '#1a1a1a'
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    body: {
      fontSize: '1rem',
      lineHeight: 1.6
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem'
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
  }
}; 