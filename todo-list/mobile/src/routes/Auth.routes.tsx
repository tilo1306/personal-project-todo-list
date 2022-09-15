import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerTasks } from './Drawin.routes';

const Auth = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="DrawerTasks" component={DrawerTasks} />
    </Auth.Navigator>
  );
};
