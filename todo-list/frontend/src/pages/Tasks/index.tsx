/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Date } from '../../components/Date';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ListTask } from '../../components/ListTask';
import { Local } from '../../types/local';
import { Task } from '../../types/task';
import { api } from '../../utils/axios';
import {
  Area,
  Container,
  Image,
  Section,
  Time,
  Title,
  AreaTasks,
} from './styles';

export const Tasks: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Task[]>([]);
  const [text, setText] = useState('');

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user') as string) as Local;

  const loadApi = async (): Promise<void> => {
    const json = (await api.allTasks(user.id, user.itoken)) as Task[];
    setList(json);
  };
  const handleChange = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    if (e.key === 'Enter') {
      await api.create(user.id, text, user.itoken);
      setText('');
      void loadApi();
    }
  };

  useEffect(() => {
    if (user !== undefined) {
      setLoading(true);
      void loadApi();
      setLoading(false);
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <Container>
      <Header />
      <Area>
        <Time>
          <Date />
        </Time>
        <Section>
          <Title>TodoList</Title>
          <Image />
        </Section>
        <Input
          className="add-task"
          type="text"
          maxLength={30}
          placeholder="Digite uma Tarefa"
          autoFocus
          onKeyUp={handleChange}
          onChange={({ target }) => setText(target.value)}
        />
        {loading && <div>Loading..</div>}
        {!loading && (
          <AreaTasks>
            {list.map((task) => (
              <ListTask
                key={task.id}
                userId={user.id}
                task={task}
                token={user.itoken}
                load={loadApi}
              />
            ))}
          </AreaTasks>
        )}
      </Area>
    </Container>
  );
};
