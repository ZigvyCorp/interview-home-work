import axios from "axios";
let endPoint = "";
const instance = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/${endPoint}`,
});

export default instance;
