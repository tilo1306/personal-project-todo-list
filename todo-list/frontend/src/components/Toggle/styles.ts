import styled from 'styled-components';
import { ReactComponent as Moon } from '../../assets/moon.svg';
import { ReactComponent as Sun } from '../../assets/sun.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  .switch {
    padding: 0 5px;
  }
`;
export const Lua = styled(Moon)`
  width: 30px;
  height: 30px;
  stroke: black;
  stroke-width: 5px;
`;
export const Sol = styled(Sun)`
  width: 30px;
  height: 30px;
  stroke: black;
  stroke-width: 1px;
`;
