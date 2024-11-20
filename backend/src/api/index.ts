import axios, { AxiosInstance } from "axios";
import { EXTERNAL_BASE_URL } from "src/constants/common";

const api: AxiosInstance = axios.create({
  baseURL: EXTERNAL_BASE_URL,
});

export default api;
