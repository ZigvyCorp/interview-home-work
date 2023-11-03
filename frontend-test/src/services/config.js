import axios from "axios";
import { getDataFromLocal } from "../utils/localStore";

const BASE_URL = "http://localhost:8080/api";

const Authorization = getDataFromLocal("user");

const configHeaderAxios = () => {
  return {
    Authorization,
  };
};

export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeaderAxios(),
});
