import axios from "axios";
import { ENV_CONFIG } from "@/shared";

const axiosClient = axios.create({
  baseURL: ENV_CONFIG.apiURL, // TODO: take this api URL from env
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
axiosClient.interceptors.request.use(
  (config: any) => {
    // const { token } = getAuthCredentials();
    let token: any;
    config.headers = {
      ...config.headers,
      ...(token && { Authorization: `Bearer ${token}` }),
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Change response data/error here
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errors = error.response?.data?.error;

    return Promise.reject(errors);
  }
);

export default axiosClient;
