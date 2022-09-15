import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Input } from '../Inputs';

export const Text = styled(Input)`
  width: ${RFValue(120)}px;
  margin-left: 10px;
  font-family: ${({ theme }) => theme.font.roboto};
  font-size: ${RFValue(16)}px;
`;
