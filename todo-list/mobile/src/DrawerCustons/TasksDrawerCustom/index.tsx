import React from 'react';
import { Linking, Alert } from 'react-native';
import {
  AreaLink,
  ContainerDrawer,
  Switch,
  Logo,
  Link,
  ContainerLinks,
  LogoFigma,
  LogoLinkedin,
  LogoGitHub,
  ContainerSwitch,
  Moon,
  Sun,
} from './styled';
import { useTheme } from '../../hooks/theme';
import { useAuth } from '../../context/AuthContext';

export const TasksDrawerCustom = () => {
  const { toggleTheme, theme } = useTheme();
  const { signOut } = useAuth();

  const handleChange = () => {
    toggleTheme();
  };
  const handleSignOut = () => {
    Alert.alert('Tem certeza?', 'Deseja realmente sair da aplicação?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sair',
        onPress: () => signOut(),
      },
    ]);
  };

  return (
    <ContainerDrawer>
      <ContainerLinks>
        <Logo />
        <AreaLink
          onPress={() =>
            Linking.openURL(
              'https://www.figma.com/file/savQbaci4mDQUGf3cEzmuh/New-TodoList?node-id=12%3A104',
            ).catch(err => console.error('An error occurred', err))
          }
        >
          <LogoFigma />
          <Link>Figma</Link>
        </AreaLink>
        <AreaLink>
          <LogoLinkedin />
          <Link
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/in/douglas-s-oliveira',
              ).catch(err => console.error('An error occurred', err))
            }
          >
            Linkedin
          </Link>
        </AreaLink>
        <AreaLink>
          <LogoGitHub />
          <Link
            onPress={() =>
              Linking.openURL('https://github.com/tilo1306').catch(err =>
                console.error('An error occurred', err),
              )
            }
          >
            GitHub
          </Link>
        </AreaLink>
        <AreaLink>
          <Link onPress={handleSignOut}>Sair</Link>
        </AreaLink>
      </ContainerLinks>
      <ContainerSwitch>
        <Moon />
        <Switch value={theme.title === 'light'} onValueChange={handleChange} />
        <Sun />
      </ContainerSwitch>
    </ContainerDrawer>
  );
};
