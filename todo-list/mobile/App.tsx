import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/routes';
import { SignUp } from './src/Pages/SignUp';
import dark from './src/styles/themes/dark';
const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={dark}>
        <SignUp />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
