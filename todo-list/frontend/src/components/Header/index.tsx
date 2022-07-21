/* eslint-disable unused-imports/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Toggle } from '../Toggle';
import { Container, Div, Links, Logo } from './styles';
import { useTheme } from '../../hooks/theme';

export const Header: React.FC = () => {
  const { pathname } = window.location;

  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() => theme.title === ' dark');

  const handleChangetheme = (): void => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function reportWindowSize(): void {
      setWindowWidth(window.innerWidth);
    }
    // Trigger this function on resize
    window.addEventListener('resize', reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener('resize', reportWindowSize);
  }, []);

  return (
    <Container>
      <Div>
        <Logo />
        <Toggle
          labelLeft="Dark"
          labelRight="Light"
          checked={darkTheme}
          onChange={handleChangetheme}
        />
      </Div>
      {windowWidth > 800 && (
        <Div>
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
          <a
            href="https://github.com/tilo1306"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {pathname === '/login' ? (
            <Links to={'/register'}>Registrar</Links>
          ) : pathname === '/register' ? (
            <Links to={'/login'}>Logar</Links>
          ) : (
            <Links to={'/login'} onClick={() => console.log('Deslogou')}>
              Sair
            </Links>
          )}
        </Div>
      )}
      {windowWidth < 800 && <button>ts</button>}
    </Container>
  );
};
