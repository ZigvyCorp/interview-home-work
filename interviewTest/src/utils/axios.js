import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com";
const axiosInstance = axios.create({ baseURL: BASE_URL });

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(
      error // (error.response && error.response.data) || "Something went wrong"
    );
  }
);

export default axiosInstance;
