import axios from 'axios';
// import { store } from "../redux/store";
const API_URL = import.meta.env.VITE_BACKEND_URL;

const axiosClient = axios.create({ baseURL: API_URL });

// axiosClient.interceptors.request.use(function (config) {
//   config.withCredentials = true;
//   return config;
// });

export default axiosClient;
