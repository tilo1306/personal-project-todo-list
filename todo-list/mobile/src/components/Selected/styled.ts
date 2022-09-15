import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: ${RFValue(25)}px;
  border: 1px solid black;
  border-radius: ${RFValue(8)}px;
  justify-content: center;
  background-color: #f5f5f5;
  margin-right: 5px;
`;
export const Select = styled(Picker)`
  width: ${RFValue(130)}px;
  font-family: ${({ theme }) => theme.font.roboto};
  font-size: 50px;
`;
