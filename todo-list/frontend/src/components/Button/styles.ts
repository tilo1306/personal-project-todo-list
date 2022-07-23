import styled from 'styled-components';


export const Container = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  margin-top: 20px;
  background-color: #E44C4E;
  transition: opacity .3s;
  color: white;
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.roboto};
  &:hover{
    opacity: .7;
  }

`;
