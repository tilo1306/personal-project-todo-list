import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Logo1 from '../../assets/logo.svg';
import Email from '../../assets/email.svg';
import Password from '../../assets/password.svg';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.color.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 ${RFValue(39)}px;
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
export const AreaInput = styled.View`
  width: 100%;
  height: ${RFValue(350)}px;
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 10px;
  padding: 0 45px;
`;
export const AreaTitleForm = styled.View``;

export const KeyboardArea = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
`;

export const TextInput = styled.Text`
  margin-top: ${RFValue(45)}px;
  color: ${({ theme }) => theme.color.white};
  font-size: 36px;
  font-family: ${({ theme }) => theme.font.forum};
  margin-bottom: ${RFValue(0)}px;
`;

export const Line = styled.View`
  width: ${RFValue(80)}px;
  height: ${RFValue(8)}px;
  border-radius: ${RFValue(4)}px;
  background-color: #a4d6f5;
  margin: 0;
  padding: 0;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #e44c4e;
  height: ${RFValue(40)}px;
  justify-content: center;
  border-radius: ${RFValue(5)}px;
  margin-top: ${RFValue(20)}px;
`;
export const TextButton = styled.Text`
  text-align: center;
  color: white;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.font.roboto};
`;
export const TextAcess = styled.Text`
  width: 100%;
  flex: 1;
  text-align: center;
  padding-top: ${RFValue(20)}px;
`;
export const ViewInput = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${RFValue(40)}px;
  background-color: red;
  align-items: center;
  background-color: ${({ theme }) => theme.color.input};
  margin-top: ${RFValue(20)}px;
  border-radius: ${RFValue(5)}px; ;
`;

export const ImgEmail = styled(Email)`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  margin-left: ${RFValue(20)}px;
  margin-right: ${RFValue(10)}px; ;
`;
export const ImgPassword = styled(Password)`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  margin-left: ${RFValue(20)}px;
  margin-right: ${RFValue(10)}px;
  fill: #313862;
`;
export const NewAccount = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.font.roboto};
  color: ${({ theme }) => theme.color.white};
`;
