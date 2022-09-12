import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  AreaTask,
  AreaTitle,
  Title,
  Logo,
  InputAdd,
} from './styled';
export const Tasks: React.FC = () => {
  return (
    <Container>
      <AreaTask>
        <AreaTitle>
          <Title>Todo List</Title>
          <Logo />
        </AreaTitle>
        <InputAdd />
        <Text>Todo-List</Text>
      </AreaTask>
    </Container>
  );
};
