import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Container, Select } from './styled';

interface Props {
  status: string;
}

export const Selected = ({ status }: Props) => {
  const [selectedStatus, setSelectedStatus] = useState(status);
  console.log(selectedStatus);

  return (
    <Container>
      <Select
        selectedValue={selectedStatus}
        onValueChange={itemValue => setSelectedStatus(itemValue as string)}
      >
        <Picker.Item label="Aguardando" value="Aguardando" />
        <Picker.Item label="Andamento" value="Andamento" />
        <Picker.Item label="Completo" value="Completo" />
      </Select>
    </Container>
  );
};
