import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Date } from '../../components/Date';
import { Header } from '../../components/Header';
import { Local } from '../../types/local';
import { Task } from '../../types/task';
import { api } from '../../utils/axios';
import { Area, Container, Image, Section, Time, Title } from './styles';

export const Tasks: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState<Task[]>([]);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user') as string) as Local;

  const loadApi = async (): Promise<void> => {
    const json = (await api.allTasks(user.id, user.itoken)) as Task[];
    setTask(json);
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
        {/* <ul>{!loading && task.map((p) => <li key={p.id}>{p.task}</li>)}</ul> */}
      </Area>
    </Container>
  );
};
