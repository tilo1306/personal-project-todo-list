import React from 'react';
import 'react-native-gesture-handler';
import { Routes } from './src/routes';
import { ThemeProvider } from './src/hooks/theme';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Forum_400Regular } from '@expo-google-fonts/forum';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Forum_400Regular,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator color={'#fff'} />;
  }
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}
