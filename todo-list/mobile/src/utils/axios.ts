/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://192.168.1.115:3001/',
});

const BASE_URL = axios.create({
  baseURL: 'http://192.168.1.115:3001/',
});

export const api = {
  register: async (email: string, password: string) => {
    const response = await BASE_URL.post('/register', { email, password });
    return response.data;
  },
  login: async (email: string, password: string) => {
    const response = await BASE_URL.post('login', { email, password });
    return response.data;
  },
  allTasks: async (id: string, token: string) => {
    const response = await BASE_URL.get(`/task/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
  create: async (userId: string, task: string, token: string) => {
    const response = await BASE_URL.post(
      `/task/${userId}`,
      {
        task,
      },
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
  },
  edit: async (
    id: string,
    userId: string,
    task: string,
    status: string,
    token: string,
  ) => {
    const response = await BASE_URL.put(
      `/task/${userId}`,
      {
        id,
        task,
        status,
      },
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
  },
  delete: async (id: string, userId: string, token: string) => {
    const response = await BASE_URL.delete(`/task/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        id,
      },
    });
    return response.data;
  },
};
