import axios from 'axios';

const api = axios.create({
  baseURL: 'http://jefersonsilva.com.br/',
});

export default api;
