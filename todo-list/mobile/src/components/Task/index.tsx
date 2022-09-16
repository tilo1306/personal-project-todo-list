import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Task as type } from '../../@types/Task';
import { Text } from './styled';
import { api } from '../../utils/axios';

interface Props {
  task: type;
}

export const Task = ({ task }: Props) => {
  const [text, setText] = useState(task.task);
  const { user } = useAuth();

  const updateTask = async (id: string, task: string, status: string) => {
    await api.edit(
      id,
      user?.id as string,
      task,
      status,
      user?.itoken as string,
    );
  };

  return (
    <Text
      autoCapitalize="none"
      autoCorrect={false}
      value={text}
      onChangeText={setText}
      onSubmitEditing={() => updateTask(task.id, text, task.status)}
    />
  );
};
