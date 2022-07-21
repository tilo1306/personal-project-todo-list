import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section``;

export const Links = styled(Link)`
  font-size: 34px;
  padding-left: 106px;
  color: ${({ theme }) => theme.color.white};
`;
