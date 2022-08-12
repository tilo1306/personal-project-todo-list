import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  margin-top: 20px;
  background-color: #e44c4e;
  transition: opacity 0.3s;
  color: white;
  font-size: 16px;
  font-family: 'Economica', sans-serif;
  &:hover {
    opacity: 0.7;
  }
`;
