/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://10.0.2.2:3001',
});
const base = axios.create({
  baseURL: 'http://10.0.2.2:3001',
});
export const api = {
  register: async (email: string, password: string) => {
    const response = await base.post('/register', { email, password });
    return response.data;
  },
  login: async (email: string, password: string) => {
    const response = await base.post('/login', { email, password });
    return response.data;
  },
  allTasks: async (id: string, token: string) => {
    const response = await base.get(`/task/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
  create: async (userId: string, task: string, token: string) => {
    const response = await base.post(
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
    const response = await base.put(
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
    const response = await base.delete(`/task/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        id,
      },
    });
    return response.data;
  },
};
