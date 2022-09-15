import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Container, Select } from './styled';

interface Props {
  status: string;
}

export const Selected = ({ status }: Props) => {
  const [selectedStatus, setSelectedStatus] = useState(status);

  return (
    <Container>
      <Select
        selectedValue={selectedStatus}
        onValueChange={itemValue => setSelectedStatus(itemValue as string)}
      >
        <Picker.Item
          style={{ fontSize: 13 }}
          label="Aguardando"
          value="Aguardando"
        />
        <Picker.Item
          style={{ fontSize: 13 }}
          label="Andamento"
          value="Andamento"
        />
        <Picker.Item
          style={{ fontSize: 13 }}
          label="Completo"
          value="Completo"
        />
      </Select>
    </Container>
  );
};
