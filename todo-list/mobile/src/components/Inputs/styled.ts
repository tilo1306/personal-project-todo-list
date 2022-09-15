import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
  background-color: transparent;
  border-radius: ${RFValue(5)}px;
`;
