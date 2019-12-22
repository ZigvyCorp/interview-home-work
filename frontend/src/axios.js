import axios from 'axios';
import store from './store/store';
import { get as _get } from 'lodash';

const instance = axios.create({
  baseURL: '/api/v1/'
});

instance.interceptors.request.use(req => {
  const state = store.getState(),
    token = _get(state, 'authen.token', '');
  if(token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req
})

export default instance;