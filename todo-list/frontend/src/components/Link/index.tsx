/* eslint-disable unused-imports/no-unused-vars */
import React from 'react';
import { Container } from './styles';

export const Link: React.FC = () => {
  return (
    <Container>
      <a
        href="https://www.figma.com/file/savQbaci4mDQUGf3cEzmuh/New-TodoList?node-id=12%3A104"
        target="_blank"
        rel="noreferrer"
      >
        Figma
      </a>
      <a
        href="https://www.linkedin.com/in/douglas-s-oliveira"
        target="_blank"
        rel="noreferrer"
      >
        Linkedin
      </a>
      <a href="https://github.com/tilo1306" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </Container>
  );
};
