import React from 'react';
import { Selected } from '../../components/Selected/Index';
import {
  Container,
  AreaTask,
  AreaTitle,
  Title,
  Logo,
  InputAdd,
  ViewTask,
  TextTask,
} from './styled';
export const Tasks: React.FC = () => {
  return (
    <Container>
      <AreaTask>
        <AreaTitle>
          <Title>Todo List</Title>
          <Logo />
        </AreaTitle>
        <InputAdd maxLength={15} />
        <ViewTask>
          <TextTask task="HTML" />
          <Selected status={'Andamento'} />
        </ViewTask>
      </AreaTask>
    </Container>
  );
};
