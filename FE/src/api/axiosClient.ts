import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    const { data } = response.data;
    return data || response.data;
  },
  (error) => {
    return Promise.reject(
      new Error(error?.response?.data?.error_message || "Đã có lỗi xảy ra.")
    );
  }
);

export default axiosClient;
