import axios from "axios";
import { IData } from "../../types";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getPosts = async <Data>(pageNumber: Number) => {
  const promise = await API.get<IData<Data>>(
    `/api/posts?skip=${pageNumber}&limit=1`
  );
  return {
    data: promise.data.data,
    size: promise.data.size,
  } as const;
};
