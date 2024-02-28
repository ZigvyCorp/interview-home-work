import axiosInstance from "../utils/axios";

export const getPostsOnPage = async (page = 1) => {
  return await axiosInstance.get(`/posts?_page=${page}`);
};

export const getCommentsApi = async (postId) => {
  return await axiosInstance.get(`/comments?postId=${postId}`);
};

export const getAllPostsAPI = async () => {
  return await axiosInstance.get("/posts");
};

export const getUserByIdAPI = async (userId) => {
  return await axiosInstance.get(`/users/${userId}`);
};

export const searchPostsByTitle = async (searchTerm) => {
  return await axiosInstance.get(`/posts?title_like=${searchTerm}`);
};
