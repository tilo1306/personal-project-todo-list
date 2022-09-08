import React, { useState } from 'react';
import { Linking } from 'react-native';
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
} from './styled';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../hooks/theme';

export const SignUpDrawerCustom = () => {
  const { toggleTheme, theme } = useTheme();
  const navigation = useNavigation();

  const [darkTheme, setDarkTheme] = useState(theme.title === 'dark');

  const handleChange = () => {
    toggleTheme();
    setDarkTheme(!darkTheme);
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
          <Link onPress={() => navigation.navigate('DrawerSignIn' as never)}>
            Logar
          </Link>
        </AreaLink>
      </ContainerLinks>
      <Switch value={darkTheme} onChange={handleChange} />
    </ContainerDrawer>
  );
};
