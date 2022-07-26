/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import { Task } from '../../types/task';
import { api } from '../../utils/axios';
import {
  Container,
  EditWindowns,
  InputWindows,
  ButtonEdit,
  ButtonDel,
  Div,
} from './styles';

interface Props {
  task: Task;
  userId: string;
  token: string;
}

export const ListTask = ({ task, userId, token }: Props) => {
  const [screen, setScreen] = useState(false);
  const [text, setText] = useState('');

  const selecthandle = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ): Promise<void> => {
    await api.edit(task.id, userId, task.task, e.target.value, token);
  };

  const windows = (): void => {
    setScreen(true);
    setText(task.task);
  };

  const handleChange = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    if (e.key === 'Enter') {
      await api.edit(task.id, userId, text, task.status, token);
      setScreen(false);
      setText('');
    }
  };
  const handleDel = async (): Promise<void> => {
    await api.delete(task.id, userId, token);
  };
  return (
    <Container>
      <span> {task.task}</span>
      {screen && (
        <EditWindowns>
          <InputWindows
            type="text"
            placeholder="Digite a alteração"
            autoFocus
            onKeyUp={handleChange}
            value={text}
            onChange={({ target }) => setText(target.value)}
          />
        </EditWindowns>
      )}
      <Div>
        <select onChange={selecthandle} defaultValue={task.status}>
          <option value="Aguardando">Aguardando</option>
          <option value="Progresso">Progresso</option>
          <option value="Finalizado">Finalizado</option>
        </select>
        <ButtonEdit onClick={windows}>Edit</ButtonEdit>
        <ButtonDel onClick={handleDel}>Del</ButtonDel>
      </Div>
    </Container>
  );
};
