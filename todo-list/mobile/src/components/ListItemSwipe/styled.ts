import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import delete1 from '../../assets/delete.svg';

export const ItemSwipe = styled.TouchableHighlight`
  width: 100%;
  height: ${RFValue(30)}px;
  background-color: #ff0000;
  justify-content: center;
  border-radius: ${RFValue(5)}px;
`;
export const IconDelete = styled(delete1)`
  fill: black;
  width: 20px;
  height: 20px;
  margin-left: 15px;
`;
