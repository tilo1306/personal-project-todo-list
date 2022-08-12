import React, { useState } from 'react';
import { Task } from '../../types/task';
import { api } from '../../utils/axios';
import { Button } from '../Button';
import { Input } from '../Input';
import { Container, EditWindowns, Div } from './styles';

interface Props {
  task: Task;
  userId: string;
  token: string;
  load: () => void;
}

export const ListTask = ({ task, userId, token, load }: Props): JSX.Element => {
  const [screen, setScreen] = useState(false);
  const [text, setText] = useState('');

  const selecthandle = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ): Promise<void> => {
    await api.edit(task.id, userId, task.task, e.target.value, token);
    load();
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
      load();
    }
  };
  const handleDel = async (): Promise<void> => {
    await api.delete(task.id, userId, token);
    load();
  };
  return (
    <Container>
      <span className={task.status === 'Finalizado' ? 'finishin' : ''}>
        {task.task}
      </span>
      {screen && (
        <EditWindowns>
          <Input
            className="edit-Input"
            type="text"
            placeholder="Digite a alteração"
            autoFocus
            onKeyUp={handleChange}
            value={text}
            onChange={({ target }) => setText(target.value)}
            maxLength={20}
          />
        </EditWindowns>
      )}
      <Div>
        <select
          className="select-input"
          onChange={selecthandle}
          defaultValue={task.status}
        >
          <option value="Aguardando">Aguardando</option>
          <option value="Progresso">Progresso</option>
          <option value="Finalizado">Finalizado</option>
        </select>
        <div>
          <Button className="button-edit" onClick={windows}>
            Edit
          </Button>
          <Button className="button-del" onClick={handleDel}>
            Del
          </Button>
        </div>
      </Div>
    </Container>
  );
};
