// api/axiosConfig.ts
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',  // RailsサーバーのURLを設定
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
