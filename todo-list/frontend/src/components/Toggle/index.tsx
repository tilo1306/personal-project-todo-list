import React from 'react';
import Switch from 'react-switch';
import { Container, Lua, Sol } from './styles';

interface ItogglesProps {
  checked: boolean;
  onChange: () => void;
}

export const Toggle: React.FC<ItogglesProps> = ({ checked, onChange }) => {
  return (
    <Container>
      <Lua />
      <Switch
        className="switch"
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={onChange}
      />
      <Sol />
    </Container>
  );
};
