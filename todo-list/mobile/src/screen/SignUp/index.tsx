import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import { api } from '../../utils/axios';
import { Input } from '../../components/Inputs';
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

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const { signOut } = useAuth();

  const handleSubmit = async (): Promise<void> => {
    if (password.trim() !== '' || email.trim() !== '') {
      try {
        await api.register(email, password);
        signOut();
        navigation.navigate('DrawerSignIn' as never);
      } catch (error: any) {
        Alert.alert(error.response.data.error);
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
          <TextInput>Registrar</TextInput>
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
            <TextButton>Cadastrar</TextButton>
          </Button>
          <TextAcess
            onPress={() => navigation.navigate('DrawerSignIn' as never)}
          >
            <NewAccount>Já tenho uma conta</NewAccount>
          </TextAcess>
        </KeyboardArea>
      </AreaInput>
    </Container>
  );
};
