import axios from 'axios';
import {Settings} from '../constant/setting';

export const $axios = axios.create({
  baseURL: Settings.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getApi = url => $axios.get(url);
