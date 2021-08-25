import {$axios} from './utils/api';

export const init = () => {
  $axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      console.log('request config', config);
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );
};
