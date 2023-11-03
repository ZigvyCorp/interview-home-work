import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

const api = axios.create({
  baseURL: "http://localhost:3000/",
  ...config,
});

export default api;
