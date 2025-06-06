import '@emotion/react';

declare module '@emotion/react' {
  interface Theme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      textSecondary: string;
      accent: string;
      background: string;
      surface: string;
    };
    typography: {
      fontFamily: string;
      h1: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h2: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h3: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      body: {
        fontSize: string;
        lineHeight: number;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
} 