import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  a {
    font-size: 20px;
    margin: 0 10px;
    font-family: ${({ theme }) => theme.font.roboto};

    color: ${({ theme }) => theme.color.white};
  }
`;
