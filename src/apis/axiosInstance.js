import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;