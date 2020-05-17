import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/main",
  headers: {
    "Content-type": "application/json"
  }
});