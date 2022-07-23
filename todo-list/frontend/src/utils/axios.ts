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

};