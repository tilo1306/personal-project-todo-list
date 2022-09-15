import React, { useState } from 'react';
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

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = async (): Promise<void> => {
    if (password.trim() !== '' || email.trim() !== '') {
      try {
        console.log(email);
        console.log(password);

        await api.register(email, password);
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
