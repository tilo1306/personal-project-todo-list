import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Date } from '../../components/Date';
import { Header } from '../../components/Header';
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

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user') as string) as Local;

  const loadApi = async (): Promise<void> => {
    const json = (await api.allTasks(user.id, user.itoken)) as Task[];
    setList(json);
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
        {loading && <div>Loading..</div>}
        {!loading && (
          <AreaTasks>
            {list.map((task) => (
              <ListTask
                key={task.id}
                userId={user.id}
                task={task}
                token={user.itoken}
              />
            ))}
          </AreaTasks>
        )}
      </Area>
    </Container>
  );
};
