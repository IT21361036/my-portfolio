import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      text: string;
      textSecondary: string;
      surface: string;
    };
  }
} 