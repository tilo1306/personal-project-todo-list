/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useAuth } from '../../context/AuthContext';
import { api } from '../../utils/axios';
import { Task } from '../../@types/Task';
import { ListItemSwipe } from '../../components/ListItemSwipe';
import { ListTasks } from '../../components/ListTasks';
import {
  Container,
  AreaTask,
  AreaTitle,
  Title,
  Logo,
  InputAdd,
} from './styled';

export const Tasks: React.FC = () => {
  const [list, setList] = useState<Task[]>([]);
  const [item, setItem] = useState('');

  const { user } = useAuth();

  const loadApi = async () => {
    try {
      const listTasks = await api.allTasks(
        user?.id.toString() as string,
        user?.itoken as string,
      );
      setList(listTasks);
    } catch (error) {
      setList([]);
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    api.create(user?.id.toString() as string, item, user?.itoken as string);
    setItem('');
    loadApi();
  };

  const deleteItem = async (item: string) => {
    await api.delete(
      item,
      user?.id.toString() as string,
      user?.itoken as string,
    );
    loadApi();
  };

  useEffect(() => {
    loadApi();
  }, [list]);

  return (
    <Container>
      <AreaTask>
        <AreaTitle>
          <Title>Todo List</Title>
          <Logo />
        </AreaTitle>
        <InputAdd
          maxLength={13}
          placeholder="Digite uma nova tarefa"
          value={item}
          onChangeText={e => setItem(e)}
          onSubmitEditing={handleSubmit}
          returnKeyType="send"
        />
        <SwipeListView
          data={list}
          renderItem={({ item }) => <ListTasks task={item} />}
          renderHiddenItem={({ item }) => (
            <ListItemSwipe onDelete={() => deleteItem(item.id)} />
          )}
          leftOpenValue={50}
          disableLeftSwipe={true}
          keyExtractor={item => item.id}
        />
      </AreaTask>
    </Container>
  );
};
