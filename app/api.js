import Axios from 'axios';
import {
  BASE_URL,
} from './appConfig';

const api = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
