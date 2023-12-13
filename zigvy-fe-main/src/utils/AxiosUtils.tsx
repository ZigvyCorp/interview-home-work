import { AxiosStatic } from "axios";

export function setupAxios(axios: AxiosStatic) {
  axios.defaults.headers.Accept = "application/json";
  axios.defaults.baseURL = `${import.meta.env.VITE_BASE_URL}`;
}
