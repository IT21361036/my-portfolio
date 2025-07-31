import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import Portfolio from './pages/Portfolio';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Portfolio />
    </ThemeProvider>
  );
};

export default App; 