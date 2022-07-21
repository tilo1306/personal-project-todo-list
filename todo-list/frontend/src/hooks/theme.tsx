/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { createContext, useState, useContext } from 'react';

import dark from '../styles/theme/dark';
import light from '../styles/theme/light';

interface Props {
  children: React.ReactNode;
}

interface IthemeContext {
  toggleTheme: () => void;
  theme: Itheme;
}

interface Itheme {
  title: string;

  color: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
  };
}

const ThemeContext = createContext<IthemeContext>({} as IthemeContext);

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Itheme>(dark);

  const toggleTheme = (): void => {
    if (theme.title === 'dark') {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IthemeContext {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useTheme };
