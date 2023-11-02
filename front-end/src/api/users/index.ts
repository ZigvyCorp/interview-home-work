import axios from "axios";
import { IData } from "../../types";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getUserById = async <Data>(id: string) => {
  const promise = await API.get<IData<Data>>(`/api/users/${id}`);
  return promise.data.data;
};
