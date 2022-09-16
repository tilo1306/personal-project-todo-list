import React from 'react';
import { Task } from '../../@types/Task';
import { Selected } from '../Selected/Index';
import { ViewTask, TextTask } from './styled';

interface Props {
  task: Task;
}

export const ListTasks = ({ task }: Props) => {
  return (
    <ViewTask key={task.id}>
      <TextTask task={task} />
      <Selected task={task} />
    </ViewTask>
  );
};
