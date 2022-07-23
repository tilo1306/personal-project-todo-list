import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Close } from '../../assets/close.svg';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 160px;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 1000;
  border-left: 1px solid ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.secondary};
  a {
    font-size: 20px;
    margin: 7px;
    font-family: ${({ theme }) => theme.font.roboto};
    color: ${({ theme }) => theme.color.white};
  }
`;
export const Div = styled.div`
  margin-bottom: 20px;
`;

export const Links = styled(Link)`
  font-size: 34px;
  margin-top: 10px;
  color: ${({ theme }) => theme.color.white};
`;
export const Menu = styled(Close)`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  fill: ${(props) => props.theme.color.white};
`;
