import axios from "axios";
import { IData } from "../../types";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getCommentsByPostId = async <Data>(id: string) => {
  const promise = await API.get<IData<Data>>(`/api/posts/${id}/comments`);
  return promise.data.data;
};
