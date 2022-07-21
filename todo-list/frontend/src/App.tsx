import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/theme';
import { MainRoutes } from './routes/MainRoutes';
const App: React.FunctionComponent = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainRoutes />
    </ThemeProvider>
  );
};

export default App;
