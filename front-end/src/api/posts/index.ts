import axios from "axios";
import { IData } from "../../types";
import { IPostService } from "../../types/posts";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getPosts = async <Data>(pageNumber: Number) => {
  const promise = await API.get<IData<Data>>(
    `/api/posts?skip=${pageNumber}&limit=5`
  );
  return {
    data: promise.data.data,
    size: promise.data.size,
  } as const;
};

export const createPost = async <Data>(data: IPostService) => {
  const promise = await API.post<IData<Data>>(`/api/posts/create`, data);
  return promise.data.data;
};

export const deletePost = async <Data>(id: string) => {
  const promise = await API.delete<IData<Data>>(`/api/posts/delete/${id}`);
  return promise.data.data;
};

export const editPost = async <Data>(data: IPostService, id: string) => {
  const promise = await API.patch<IData<Data>>(`/api/posts/update/${id}`, data);
  return promise.data.data;
};
