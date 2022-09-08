import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ThemeProvider } from 'styled-components';
import { useTheme } from '../hooks/theme';
import { DrawerSignIn, DrawerSignUp, DrawerTasks } from './Drawin.routes';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Navigator>
        <Screen name="DrawerSignIn" component={DrawerSignIn} />
        <Screen name="DrawerSignUp" component={DrawerSignUp} />
        <Screen name="DrawerTasks" component={DrawerTasks} />
      </Navigator>
    </ThemeProvider>
  );
}
