import React, { createContext, useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api, request } from '../utils/axios';

interface Props {
  children: React.ReactNode;
}

interface User {
  id: string;
  email: string;
  itoken: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
        request.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${user?.itoken}`;
      }
      setLoading(false);
    }

    loadStorageData();
  });

  async function signIn(email: string, password: string) {
    try {
      const response = await api.login(email, password);
      setUser(response);

      request.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.itoken}`;
      await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response));
      navigation.navigate('DrawerTasks' as never);
    } catch (error: any) {
      Alert.alert(error.response.data.error);
    }
  }

  async function signOut() {
    await AsyncStorage.removeItem('@RNAuth:user');
    setUser({} as User);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user.id, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };
