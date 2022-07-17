import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { SignUp } from './src/Pages/SignUp';

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <SignUp />
    </NavigationContainer>
  );
};

export default App;
