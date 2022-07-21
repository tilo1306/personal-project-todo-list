import React from 'react';
import Switch from 'react-switch';
import { Container, ToggleLabel } from './styles';

interface ItogglesProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange: () => void;
}

export const Toggle: React.FC<ItogglesProps> = ({
  labelLeft,
  labelRight,
  checked,
  onChange,
}) => {
  return (
    <Container>
      <ToggleLabel>{labelLeft}</ToggleLabel>
      <Switch
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={onChange}
      />
      <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
  );
};
