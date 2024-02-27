import { AxiosRequestConfig } from "axios";

const axiosConfigs = {
  development: {
    baseURL: "http://157.245.48.233:4000/api",
    timeout: 10000,
  },
  production: {
    baseURL: "http://157.245.48.233:4000/api",
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
