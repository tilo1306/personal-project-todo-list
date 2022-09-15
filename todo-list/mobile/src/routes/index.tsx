import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '../context/AuthContext';
import { AuthRoutes } from './Auth.routes';
import { StackRoutes } from './Stack.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return signed ? <StackRoutes /> : <AuthRoutes />;
};

export default Routes;
