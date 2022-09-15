import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider, useTheme } from './src/hooks/theme';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Forum_400Regular } from '@expo-google-fonts/forum';
import { Economica_400Regular } from '@expo-google-fonts/economica';
import { ActivityIndicator } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import Routes from './src/routes';

export default function App() {
  useTheme();

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Forum_400Regular,
    Economica_400Regular,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator color={'#fff'} />;
  }
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
