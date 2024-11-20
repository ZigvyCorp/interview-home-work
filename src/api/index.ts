import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

axiosInstance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
