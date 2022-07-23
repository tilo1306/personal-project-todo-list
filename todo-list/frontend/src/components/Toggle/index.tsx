import React from 'react';
import Switch from 'react-switch';
import { Container } from './styles';
import { ReactComponent as Moon } from '../../assets/moon.svg';
import { ReactComponent as Sun } from '../../assets/sun.svg';

interface ItogglesProps {
  checked: boolean;
  onChange: () => void;
}

export const Toggle: React.FC<ItogglesProps> = ({ checked, onChange }) => {
  return (
    <Container>
      <Moon width={25} height={25} />
      <Switch
        className="switch"
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={onChange}
      />
      <Sun width={30} height={30} />
    </Container>
  );
};
