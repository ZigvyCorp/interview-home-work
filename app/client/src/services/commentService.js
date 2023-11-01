import { http } from "./httpService";

export const getAllCommentsByPostId = async (id) => {
  const response = await http.get(`/comments/${id}`);
  return response.data;
};
