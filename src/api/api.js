import axios from 'axios';

const api = axios.create({
  baseURL: 'https://task4backend-4a8r.onrender.com/api', // если backend локально
});

export default api;