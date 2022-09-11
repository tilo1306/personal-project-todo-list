import React from 'react';
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
import { Platform } from 'react-native';

export const SignUp: React.FC = () => {
  const navigation = useNavigation();
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
            />
          </ViewInput>
          <ViewInput>
            <ImgPassword />
            <Input placeholder="Senha" autoCorrect={false} secureTextEntry />
          </ViewInput>
          <Button>
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
