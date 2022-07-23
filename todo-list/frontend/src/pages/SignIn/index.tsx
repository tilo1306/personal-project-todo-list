/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';

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
import { api } from '../../utils/axios';

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (): Promise<any> => {
    navigate('/login');
    await api.register(email, password);
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
          onSubmit={() => {
            void handleSubmit();
          }}
        >
          <FormTitle>Cadastrar</FormTitle>
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
          <Button type="submit">Cadastrar</Button>
          <Login to={'/login'}>Já tenho uma conta</Login>
        </Form>
      </Section>
    </Container>
  );
};
