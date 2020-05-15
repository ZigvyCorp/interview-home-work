import axios, { AxiosRequestConfig } from "axios";
import qs from "querystring";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

const get = axiosInstance.get;

axiosInstance.get = ((url: string, query: any, config: AxiosRequestConfig) => {
  if (query) {
    const querystring = qs.stringify(query);
    url = `${url}?${querystring}`;
  }
  return get(url, config);
}) as any;

axiosInstance.interceptors.response.use((res) => {
  return res.data;
});

export { axiosInstance };
