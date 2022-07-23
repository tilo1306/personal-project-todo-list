/* eslint-disable unused-imports/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Toggle } from '../Toggle';
import { Container, Div, Logo, Links, Menu } from './styles';
import { useTheme } from '../../hooks/theme';
import { Link } from '../Link';
import { MenuMobile } from '../MenuMobile';

export const Header: React.FC = () => {
  const { pathname } = window.location;

  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() => theme.title === ' dark');
  const [menu, setMenu] = useState(false);

  const handleChangetheme = (): void => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function reportWindowSize(): void {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', reportWindowSize);
    return () => window.removeEventListener('resize', reportWindowSize);
  }, []);

  return (
    <Container>
      <Div>
        <Logo />
        <Toggle checked={darkTheme} onChange={handleChangetheme} />
      </Div>
      {windowWidth > 700 && <Link />}

      {windowWidth > 700 && (
        <>
          {pathname === '/login' ? (
            <Links to={'/register'}>Registrar</Links>
          ) : pathname === '/register' ? (
            <Links to={'/login'}>Logar</Links>
          ) : (
            <Links to={'/login'} onClick={() => console.log('Deslogou')}>
              Sair
            </Links>
          )}
        </>
      )}

      {windowWidth < 700 && <Menu onClick={() => setMenu(!menu)} />}
      {menu && <MenuMobile route={pathname} setMenu={setMenu} />}
    </Container>
  );
};
