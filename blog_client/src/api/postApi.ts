import { ListParams, ListResponse } from "../models/common";
import { Post } from "../models/post";
import axiosClient from "./axiosClient";

const postApi = {
  getAll(params: ListParams): Promise<ListResponse<Post>> {
    const url = "/posts";
    return axiosClient.get(url, { params });
  },

  getById(id: number): Promise<Post> {
    const url = `/posts/${id}`;
    return axiosClient.get(url);
  },
};

export default postApi;
