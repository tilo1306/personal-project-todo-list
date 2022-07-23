/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

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

export const SignIn: React.FC = () => {
  return (
    <Container>
      <Header />
      <Section>
        <DivLogo>
          <Title>Todo List</Title>
          <Logo />
        </DivLogo>
        <Form onSubmit={() => {}}>
          <FormTitle>Cadastrar</FormTitle>
          <Input className="email" type="email" required placeholder="Email" />
          <Input
            className="password"
            type="password"
            required
            placeholder="Password"
          />
          <Button type="submit">Cadastrar</Button>
          <Login to={'/login'}>Já tenho uma conta</Login>
        </Form>
      </Section>
    </Container>
  );
};
