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
} from '../SignIn/styles';
import { Button } from '../../components/Button';
import { api } from '../../utils/axios';

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (): Promise<void> => {
    if (password.trim() !== '') {
      try {
        await api.register(email, password);
        navigate('/login');
      } catch (error) {
        console.error(error);
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
