/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Picker } from '@react-native-picker/picker';
import { Container, Select } from './styled';
import { Task as type } from '../../@types/Task';
import { api } from '../../utils/axios';

interface Props {
  task: type;
}

export const Selected = ({ task }: Props) => {
  const [selectedStatus, setSelectedStatus] = useState(task.status);
  const { user } = useAuth();

  const updateTask = async (id: string, task: string, status: string) => {
    setSelectedStatus(status as string);
    await api.edit(
      id,
      user?.id as string,
      task,
      status,
      user?.itoken as string,
    );
  };

  return (
    <Container>
      <Select
        itemStyle={{ width: 20 }}
        selectedValue={selectedStatus}
        onValueChange={itemValue =>
          updateTask(task.id, task.task, itemValue as string)
        }
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
