import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo1 } from '../../assets/logo.svg';

export const Container = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  height: 100vh;
  align-items: center;
  .email {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTIuNzEzbC0xMS45ODUtOS43MTNoMjMuOTdsLTExLjk4NSA5LjcxM3ptMCAyLjU3NGwtMTItOS43MjV2MTUuNDM4aDI0di0xNS40MzhsLTEyIDkuNzI1eiIvPjwvc3ZnPg==');
    background-repeat: no-repeat;
    background-position: left;
    background-size: 1.3em;
    background-position: 10px;
  }
  .password {
    background-image: url('https://cdn-icons-png.flaticon.com/512/3064/3064155.png');
    background-repeat: no-repeat;
    background-position: left;
    background-size: 1.3em;
    background-position: 10px;
  }
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;
export const DivLogo = styled.div`
  display: flex;
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: 40px;
  font-family: ${({ theme }) => theme.font.forum};
`;
export const Logo = styled(Logo1)`
  width: auto;
  height: 30px;
  margin-left: 5px;
  margin-top: 5px;
  fill: ${({ theme }) => theme.color.white};
`;
export const Form = styled.form`
  width: 350px;
  height: 350px;
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 10px;
  margin-top: 20px;
  padding: 45px;
  filter: drop-shadow(8px 8px 10px #877b7e);

  @media (max-width: 430px) {
    width: 300px;
    height: 350px;
  }
`;
export const FormTitle = styled.p`
  position: relative;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.color.white};
  font-size: 36px;
  font-family: ${({ theme }) => theme.font.forum};
  :before {
    content: '';
    position: absolute;
    width: 80px;
    height: 8px;
    border-radius: 4px;
    left: 0;
    bottom: -8px;
    background-color: #a4d6f5;
  }
`;
export const Login = styled(Link)`
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.roboto};
  color: ${({ theme }) => theme.color.white};
  justify-content: center;
  display: flex;
  margin-top: 28px;
  padding: 5px;
`;
