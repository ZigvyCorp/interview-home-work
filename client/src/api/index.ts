import { notification } from 'antd';
import axios, { AxiosError, AxiosResponse } from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 100000,
});

http.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const status = error.response ? error.response.status : 0; 

  if (status >= 500 && status <= 599) {
        notification.error({
          message: 'Something went wrong, please try again later!!',
          duration: 10
        });
      }

    return Promise.reject(error);
  }
);