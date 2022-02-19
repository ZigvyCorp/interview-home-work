import axios from 'axios';
import { urlApi } from './config';
export const getComments = async (params) => {
  try {
    return axios.get(`${urlApi}comments`, { params });
  } catch (error) {
    return false;
  }
};
