import Axios from 'axios';
import {
  BASE_URL,
  INSTAGRAM_URL
} from './appConfig';

export const api = Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const instagram = Axios.create({
  baseURL: INSTAGRAM_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});
