/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/axios';

import {
  Container,
  DivLogo,
  Form,
  Logo,
  Section,
  Title,
  FormTitle,
  Login,
} from './styles';
import { Button } from '../../components/Button';

interface Api {
  id: number;
  email: string;
  token: string;
}

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (): Promise<any> => {
    if (password.trim() !== '') {
      const login = (await api.login(email, password)) as Api;
      if (login !== undefined) {
        localStorage.setItem('user', JSON.stringify(login));
        navigate(`/task/${login.id}`);
      }
    } else {
      alert('Campo Password vazio');
    }
  };

  return (
    <Container>
      <Header />
      <Section>
        <DivLogo>
          <Title>Todo List</Title>
          <Logo />
        </DivLogo>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit();
          }}
        >
          <FormTitle>Entrar</FormTitle>
          <Input
            className="email"
            type="email"
            required
            placeholder="Email"
            onChange={({ target }) => setEmail(target.value)}
          />
          <Input
            className="password"
            type="password"
            required
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button type="submit">Acessar</Button>
          <Login to={'/register'}>Criar uma conta</Login>
        </Form>
      </Section>
    </Container>
  );
};
