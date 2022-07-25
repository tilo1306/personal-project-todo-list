import styled from 'styled-components';

export const Container = styled.div`
border-radius: 18px;
width: 200px;
height: 48px;
background-color: ${({ theme }) => theme.color.primary};
color: ${({ theme }) => theme.color.white};
text-align: center;
line-height: 48px;
font-family: ${({ theme }) => theme.font.forum};
font-size: 20px
`
