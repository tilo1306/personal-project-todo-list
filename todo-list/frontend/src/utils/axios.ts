/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3001',
});

export const api = {
  register: async (email: string, password: string) => {
    const response = await request.post('/register', { email, password });
    return response.data;
  },
  login: async (email: string, password: string) => {
    const response = await request.post('/login', { email, password })
    return response.data
  },
  allTasks: async (id: string, token: string) => {
    const response = await request.get(`/task/${id}`, { headers: { "Authorization": `Bearer ${token}` } })
    return response.data

  },
  edit: async (id: string, userId: string, task: string, status: string, token: string) => {
    const response = await request.put(`/task/${userId}`, {
      id,
      task,
      status,
    }, { headers: { "Authorization": `Bearer ${token}` } })
    return response.data

  },
  delete: async (id: string, userId: string, token: string) => {
    const response = await request.put(`/task/${userId}`, {
      id,
    }, { headers: { "Authorization": `Bearer ${token}` } })
    return response.data
  },

};