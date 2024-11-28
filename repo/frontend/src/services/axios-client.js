import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});