import config from '@/config';
import axios from 'axios';

const configService = axios.create({
  baseURL: config.API_HOST,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

// Add a request interceptor
configService.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        'access_token'
      )}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
configService.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status) {
      localStorage.setItem('access_token', '');
    }
    return Promise.reject(error);
  }
);

export const fetcher = async (url: string) => {
  const data = await configService.get(url);

  return data;
};

export default configService;
