import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo1 } from '../../assets/logo.svg';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.color.secondary};
`;

export const Div = styled.div`
  display: flex;
  a {
    font-size: 20px;
    margin: 0 10px;
    color: ${({ theme }) => theme.color.white};
  }
`;

export const Logo = styled(Logo1)`
  width: 68px;
  height: 48px;
  fill: ${(props) => props.theme.color.white};
`;

export const Links = styled(Link)`
  font-size: 20px;
  color: ${({ theme }) => theme.color.white};
`;
