import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SignUp } from '../screen/SignUp';
import { SignIn } from '../screen/SignIn';
import { SignInDrawerCustom } from '../DrawerCustons/SignInDrawerCustom';
import { SignUpDrawerCustom } from '../DrawerCustons/SignUpDrawerCustom';
import { Tasks } from '../screen/Tasks';
import { TasksDrawerCustom } from '../DrawerCustons/TasksDrawerCustom';

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerSignIn() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={SignInDrawerCustom}
    >
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}

export function DrawerSignUp() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={SignUpDrawerCustom}
    >
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
export function DrawerTasks() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={TasksDrawerCustom}
    >
      <Screen name="Tasks" component={Tasks} />
    </Navigator>
  );
}
