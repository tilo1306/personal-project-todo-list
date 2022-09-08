import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native';
import { Container } from './styled';

export const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>Logar</Text>
      <Button
        title="tasks"
        onPress={() => navigation.navigate('DrawerTasks' as never)}
      />
    </Container>
  );
};
