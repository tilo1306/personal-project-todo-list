import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Task } from '../Task';

export const ViewTask = styled.View`
  align-items: center;
  flex-direction: row;
  height: ${RFValue(30)}px;
  justify-content: space-between;
  background-color: #f6f7f8;
  border-radius: ${RFValue(5)}px;
  margin-bottom: 20px;
`;
export const TextTask = styled(Task)`
  margin-left: 0 10px;
`;
