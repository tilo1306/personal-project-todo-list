import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from '../../components/Inputs';
import { useNavigation } from '@react-navigation/native';
import {
  AreaInput,
  AreaTitle,
  AreaTitleForm,
  Container,
  Logo,
  TextInput,
  Title,
  Line,
  Button,
  TextButton,
  TextAcess,
  ViewInput,
  ImgEmail,
  ImgPassword,
  KeyboardArea,
  NewAccount,
} from './styled';
import { Alert, Platform } from 'react-native';
import { api } from '../../utils/axios';
import { useAuth } from '../../context/AuthContext';

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const navigation = useNavigation();

  const handleSubmit = async (): Promise<any> => {
    if (password.trim() !== '' || email.trim() !== '') {
      const login = await api.login(email, password);

      if (login !== undefined) {
        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(login));
        signIn();
        navigation.navigate('DrawerTasks' as never);
      } else {
        Alert.alert('Email ou Password invalido');
      }
    } else {
      Alert.alert('Campo Email ou Password vazio');
    }
  };

  return (
    <Container>
      <AreaTitle>
        <Title>Todo List</Title>
        <Logo />
      </AreaTitle>
      <AreaInput>
        <AreaTitleForm>
          <TextInput>Entrar</TextInput>
          <Line></Line>
        </AreaTitleForm>
        <KeyboardArea behavior={Platform.OS == 'ios' ? 'padding' : null}>
          <ViewInput>
            <ImgEmail />
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </ViewInput>
          <ViewInput>
            <ImgPassword />
            <Input
              placeholder="Senha"
              autoCorrect={false}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </ViewInput>
          <Button onPress={handleSubmit}>
            <TextButton>Acessar</TextButton>
          </Button>
          <TextAcess
            onPress={() => navigation.navigate('DrawerSignUp' as never)}
          >
            <NewAccount>Criar uma conta</NewAccount>
          </TextAcess>
        </KeyboardArea>
      </AreaInput>
    </Container>
  );
};
