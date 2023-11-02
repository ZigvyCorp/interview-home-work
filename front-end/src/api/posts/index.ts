import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

interface IData<T> {
  message: string;
  data: T;
}

export const getPosts = async <Data>() => {
  const promise = await API.get<IData<Data>>("/api/posts");
  const res = promise.data.data;

  return res;
};
