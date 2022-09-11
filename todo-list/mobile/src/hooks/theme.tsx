import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    input: string;
  };
  font: {
    forum: string;
    roboto: string;
    economica: string;
  };
}

const ThemeContext = createContext<IthemeContext>({} as IthemeContext);

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Itheme>(light);
  const storeData = async (value: Itheme) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');

      jsonValue != null ? setTheme(JSON.parse(jsonValue)) : setTheme(dark);
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    storeData(theme);
  }, [theme]);

  const toggleTheme = (): void => {
    if (theme.title === 'dark') {
      setTheme(light);
      storeData(light);
    } else {
      setTheme(dark);
      storeData(dark);
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
