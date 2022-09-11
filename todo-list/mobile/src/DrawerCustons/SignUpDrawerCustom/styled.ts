import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Logo1 from './../../assets/logo.svg';
import Figma from './../../assets/figma.svg';
import Linkedin from './../../assets/linkedin.svg';
import GitHub from './../../assets/github.svg';
import EmoteSun from './../../assets/sun.svg';
import EmoteMoon from './../../assets/moon.svg';

export const ContainerDrawer = styled.View`
  align-items: center;
  flex: 1;
  background-color: ${({ theme }) => theme.color.primary};
  justify-content: space-between;
  padding: ${RFValue(30)}px 0;
`;

export const ContainerLinks = styled.View`
  align-items: center;
`;

export const Logo = styled(Logo1)`
  fill: ${({ theme }) => theme.color.white};
  height: ${RFPercentage(10)}px;
  width: ${RFPercentage(10)}px;
  margin-bottom: ${RFValue(40)}px;
`;

export const AreaLink = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: ${RFValue(10)}px;
  margin-top: ${RFValue(10)}px;
`;

export const Link = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.font.roboto};
  color: ${({ theme }) => theme.color.white};
`;

export const LogoFigma = styled(Figma)`
  width: ${RFValue(50)}px;
  margin-right: ${RFValue(5)}px;
`;

export const LogoLinkedin = styled(Linkedin)`
  width: ${RFValue(50)}px;
  margin-right: ${RFValue(5)}px;
`;

export const LogoGitHub = styled(GitHub)`
  width: ${RFValue(50)}px;
  margin-right: ${RFValue(5)}px;
  fill: ${({ theme }) => theme.color.white};
`;

export const ContainerSwitch = styled.View`
  justify-content: center;
  flex-direction: row;
`;

export const Sun = styled(EmoteSun)`
  width: 50px;
`;
export const Moon = styled(EmoteMoon)`
  width: 50px;
`;

export const Switch = styled.Switch`
  transform: scale(2);
  margin: 0 20px;
`;
