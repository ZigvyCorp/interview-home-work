import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface ApiResponse<T> {
  data: T;
}

interface ApiError<T> {
  data: T;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor để xử lý token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = `Bearer ${localStorage.getItem("accessToken")}`;
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error: AxiosError) => {
    console.log("🚀 ~ error:", error);
    return Promise.reject(error);
  }
);

const handleError = (error: AxiosResponse<ApiError<any>>): Promise<never> => {
  return Promise.reject({
    data: error,
  });
};

// Interceptor để xử lý lỗi
axiosInstance.interceptors.response.use(
  (response: ApiResponse<any>) => {
    return response.data;
  },
  (error: AxiosResponse<ApiError<any>>) => {
    if (axios.isAxiosError(error)) {
      return handleError(error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
