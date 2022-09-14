/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useNavigation, Text } from '@react-navigation/native';
import { Selected } from '../../components/Selected/Index';
import {
  Container,
  AreaTask,
  AreaTitle,
  Title,
  Logo,
  InputAdd,
  ViewTask,
  TextTask,
} from './styled';
import { Task } from '../../@types/Task';
import { api } from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Local } from '../../@types/Local';

type dataUser = {
  id: string;
  itoken: string;
};

export const Tasks = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Task[]>([]);
  const [item, setItem] = useState('');
  const [user, setUser] = useState<dataUser>(Object);

  const navigation = useNavigation();

  const handleSubmit = async () => {
    setItem('');
  };

  const loadApi = async (): Promise<void> => {
    const savedProfile = await AsyncStorage.getItem('user');

    const profile = JSON.parse(savedProfile);

    setUser({ id: profile.id, itoken: profile.itoken });
    const json = await api.allTasks('18', profile.itoken);
    json ? setList(json) : setList([]);
    console.log('====================================');
    console.log(list);
    console.log('====================================');
  };

  useEffect(() => {
    try {
      setLoading(true);
      setTimeout(() => {
        void loadApi();
      }, 1000);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <AreaTask>
        <AreaTitle>
          <Title>Todo List</Title>
          <Logo />
        </AreaTitle>
        <InputAdd
          maxLength={15}
          placeholder="Digite um novo item"
          value={item}
          onChangeText={e => setItem(e)}
          onSubmitEditing={handleSubmit}
          returnKeyType="send"
        />

        {!loading &&
          list.map(p => {
            // <ViewTask key={p.id}>
            //   <TextTask task={p.task} />
            //   <Selected status={p.status} />
            // </ViewTask>;
            <Text key={p.id}>{p.task}</Text>;
          })}
      </AreaTask>
    </Container>
  );
};
