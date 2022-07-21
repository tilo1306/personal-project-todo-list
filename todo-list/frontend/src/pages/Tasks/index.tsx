import React from 'react';
import { Header } from '../../components/Header';
import { Container } from './styles';

export const Tasks: React.FC = () => {
  return (
    <Container>
      <Header />
      <p>Tasks</p>
    </Container>
  );
};
