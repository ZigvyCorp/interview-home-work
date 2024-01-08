import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/v1';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default instance;
