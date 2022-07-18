import React from 'react';
import { Alert } from 'react-native';
import { Container, Logo, Open, Div } from './styles';

export const Header: React.FunctionComponent = () => {
  return (
    <Container>
      <Logo width={45} height={45} />
      <Div>
        <Open width={35} height={40} onPress={() => Alert.alert('clicou')} />
      </Div>
    </Container>
  );
};
