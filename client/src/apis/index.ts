import axios from "./axios";
axios.defaults.withCredentials = true;

export const post = (endpoint: string, data: any) => axios.post(endpoint, data);
export const get = (endpoint: string) => axios.get(endpoint);
export const put = (endpoint: string, data: any) => axios.put(endpoint, data);
export const remove = (endpoint: string) => axios.delete(endpoint);
