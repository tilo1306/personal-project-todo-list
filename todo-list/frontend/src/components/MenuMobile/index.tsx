import React from 'react';
import { Container, Links } from './styles';

export const MenuMobile: React.FC = () => {
  const { pathname } = window.location;

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
      {pathname === '/login' ? (
        <Links to={'/register'}>Registrar</Links>
      ) : pathname === '/login' ? (
        <Links to={'/login'}>Logar</Links>
      ) : (
        <button>Logout</button>
      )}
    </Container>
  );
};
