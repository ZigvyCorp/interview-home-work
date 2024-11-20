import axios from "axios";

const instance = axios.create({
  baseURL: "https://run.mocky.io/v3/",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.token;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
