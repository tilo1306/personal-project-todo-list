/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import {
  Container,
  AreaTask,
  AreaTitle,
  Title,
  Logo,
  InputAdd,
} from './styled';
import { Task } from '../../@types/Task';
import { ListItemSwipe } from '../../components/ListItemSwipe';
import { ListTasks } from '../../components/ListTasks';
import { api } from '../../utils/axios';
import { useAuth } from '../../context/AuthContext';

export const Tasks: React.FC = () => {
  const [list, setList] = useState<Task[]>([]);
  const [item, setItem] = useState('');

  const { user } = useAuth();

  const handleSubmit = () => {
    //   const addItem = [...list];
    //   addItem.push({
    //     id: Number(addItem.length + 1).toString(),
    //     task: item,
    //     status: 'Aguardando',
    //   });
    //   setList(addItem);
    //   setItem('');
  };
  const loadApi = async () => {
    const getAll = await api.allTasks(
      user?.id as string,
      user?.itoken as string,
    );
    setList(getAll);
  };

  const deleteItem = (index: number) => {
    let newItems = [...list];
    newItems = newItems.filter((it, i) => i != index);
    setList(newItems);
  };
  useEffect(() => {
    loadApi();
  });

  return (
    <Container>
      <AreaTask>
        <AreaTitle>
          <Title>Todo List</Title>
          <Logo />
        </AreaTitle>
        <InputAdd
          maxLength={13}
          placeholder="Digite um novo item"
          value={item}
          onChangeText={e => setItem(e)}
          onSubmitEditing={handleSubmit}
          returnKeyType="send"
        />

        <SwipeListView
          data={list}
          renderItem={({ item }) => <ListTasks task={item} />}
          renderHiddenItem={({ index }) => (
            <ListItemSwipe onDelete={() => deleteItem(index)} />
          )}
          leftOpenValue={50}
          disableLeftSwipe={true}
          keyExtractor={item => item.id}
        />
      </AreaTask>
    </Container>
  );
};
