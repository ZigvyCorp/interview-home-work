import axios from "axios";

export const baseURL = "http://localhost:3000";

export const client = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
