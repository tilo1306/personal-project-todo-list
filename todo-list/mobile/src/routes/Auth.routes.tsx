import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerSignIn, DrawerSignUp } from './Drawin.routes';
import { useTheme } from '../hooks/theme';
import { ThemeProvider } from 'styled-components';

const Auth = createNativeStackNavigator();

export const AuthRoutes = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Auth.Navigator screenOptions={{ headerShown: false }}>
        <Auth.Screen name="DrawerSignIn" component={DrawerSignIn} />
        <Auth.Screen name="DrawerSignUp" component={DrawerSignUp} />
      </Auth.Navigator>
    </ThemeProvider>
  );
};
