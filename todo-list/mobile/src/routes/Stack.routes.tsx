import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../hooks/theme';
import { DrawerTasks } from './Drawin.routes';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="DrawerTasks" component={DrawerTasks} />
      </Navigator>
    </ThemeProvider>
  );
}
