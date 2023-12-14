import axios from "axios";

export const BASE_URL = "http://localhost:8088/api/v1";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
instance.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("token");
  if (accessToken) {
    const { headers } = config;
    return {
      ...config,
      headers: {
        ...headers,
        "Access-Token": `Token ${accessToken}`,
      },
    };
  }
  return config;
});
export default instance;
