import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/routes';
import dark from './src/styles/themes/dark';
import 'react-native-gesture-handler';
const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={dark}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
