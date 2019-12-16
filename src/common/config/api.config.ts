import { AxiosRequestConfig } from "axios";

const axiosConfigs = {
  development: {
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 10000,
  },
  production: {
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout: 10000,
  },
  test: {
    baseURL: "http://localhost:3001/api/",
    timeout: 10000,
  },
};
const getAxiosConfig = (): AxiosRequestConfig => {
  const nodeEnv: string = process.env.NODE_ENV;
  console.log("Environment", nodeEnv);
  return axiosConfigs[nodeEnv as keyof typeof axiosConfigs];
};

const axiosConfig = getAxiosConfig();

export default axiosConfig;
