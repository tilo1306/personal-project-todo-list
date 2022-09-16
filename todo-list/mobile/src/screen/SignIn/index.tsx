import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
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

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const { signIn } = useAuth();

  const handleSubmit = async (): Promise<any> => {
    if (password.trim() !== '' || email.trim() !== '') {
      signIn(email, password);
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
