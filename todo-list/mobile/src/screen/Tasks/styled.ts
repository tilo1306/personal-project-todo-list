import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo1 from '../../assets/logo.svg';
import { Input } from '../../components/Inputs';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.color.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(30)}px;
`;

export const AreaTask = styled.View`
  width: 100%;
  min-height: ${RFValue(620)}px;
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: ${RFValue(10)}px;
  align-items: center;
  padding: ${RFValue(36)}px ${RFValue(20)}px;
`;

export const AreaTitle = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.forum};
  font-size: ${RFValue(40)}px;
  margin-right: ${RFValue(5)}px;
`;

export const Logo = styled(Logo1)`
  fill: ${({ theme }) => theme.color.white};
  width: ${RFValue(38)}px;
  height: ${RFValue(38)}px;
`;
export const InputAdd = styled(Input)`
  background-color: #f6f7f8;
  border-radius: ${RFValue(5)}px;
  margin-top: ${RFValue(50)}px;
  height: ${RFValue(30)}px;
  width: 100%;
  padding: 0 ${RFValue(10)}px;
  margin-bottom: 20px;
`;
