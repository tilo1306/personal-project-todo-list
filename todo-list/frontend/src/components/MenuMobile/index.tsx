import React, { Dispatch, SetStateAction } from 'react';
import { Container, Links, Menu, Div } from './styles';

interface Props {
  route: string;
  setMenu: Dispatch<SetStateAction<boolean>>;
}

export const MenuMobile: React.FC<Props> = ({ route, setMenu }: Props) => {
  return (
    <Container>
      <Div>
        <Menu onClick={() => setMenu(false)} />
      </Div>
      <a
        href="https://www.figma.com/file/savQbaci4mDQUGf3cEzmuh/New-TodoList?node-id=12%3A104"
        target="_blank"
        rel="noreferrer"
        onClick={() => setMenu(false)}
      >
        Figma
      </a>
      <a
        href="https://www.linkedin.com/in/douglas-s-oliveira"
        target="_blank"
        rel="noreferrer"
        onClick={() => setMenu(false)}
      >
        Linkedin
      </a>
      <a
        href="https://github.com/tilo1306"
        target="_blank"
        rel="noreferrer"
        onClick={() => setMenu(false)}
      >
        GitHub
      </a>
      {route === '/login' ? (
        <Links to={'/register'}>Registrar</Links>
      ) : route === '/register' ? (
        <Links to={'/login'}>Logar</Links>
      ) : (
        <Links to={'/login'} onClick={() => console.log('Deslogou')}>
          Sair
        </Links>
      )}
    </Container>
  );
};
