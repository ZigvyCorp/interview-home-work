import axios from "axios";
import ENV_VAR from "config/env.config";

const HttpRequest = () => {
  const instance = axios.create({
    baseURL: ENV_VAR.API_BASE_URL,
    timeout: ENV_VAR.API_TIME_OUT,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.response.use(
    async (response) => {
      const { data } = response.data;
      return Promise.resolve(data);
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default HttpRequest();
