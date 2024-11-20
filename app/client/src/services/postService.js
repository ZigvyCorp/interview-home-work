import { http } from "./httpService";

export const getPosts = async (params) => {
  const query = "?" + new URLSearchParams(params).toString();
  const response = await http.get(`/posts/list${query}`);
  return response.data;
};

export const getPostById = async (id) => {
  const response = await http.get(`/posts/${id}`);
  return response.data;
};
