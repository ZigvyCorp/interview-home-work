import { http } from "./httpService";

export const getAllPosts = async () => {
  const response = await http.get("/posts");
  return response.data;
};

export const getPostById = async (id) => {
  const response = await http.get(`/posts/${id}`);
  return response.data;
};
