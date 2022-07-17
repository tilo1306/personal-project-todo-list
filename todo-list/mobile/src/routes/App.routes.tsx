import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp } from '../Pages/SignUp';

const Route = createNativeStackNavigator();

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <Route.Navigator initialRouteName="SignUn">
      <Route.Screen name="Signup" component={SignUp} />
      <Route.Screen name="Signup" component={SignUp} />
    </Route.Navigator>
  );
};
