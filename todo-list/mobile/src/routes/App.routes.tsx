import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp } from '../Pages/SignUp';

const Route = createNativeStackNavigator();

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <Route.Navigator
      initialRouteName="SignUp"
      screenOptions={{ headerShown: false }}
    >
      <Route.Screen name="SignUp" component={SignUp} />
    </Route.Navigator>
  );
};
