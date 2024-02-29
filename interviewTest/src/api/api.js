import axiosInstance from "../utils/axios";

export const loginAPI = async ({ email, password }) => {
  return await axiosInstance.post("/user/login", { email, password });
};

export const registerAPI = async ({ email, password, userName }) => {
  console.log("RegisterAPi", { email, password, userName });
  return await axiosInstance.post("/user/register", {
    email,
    password,
    userName,
  });
};
export const getPostsOnPage = async (page = 1) => {
  return await axiosInstance.get(`/post?page=${page}`);
};

export const getCommentsApi = async (postId) => {
  return await axiosInstance.get(`/comment/post/${postId}`);
};

export const getUserByIdAPI = async (userId) => {
  return await axiosInstance.get(`/users/${userId}`);
};

export const searchPostsByTitle = async (searchTerm) => {
  return await axiosInstance.get(`/post/search?title=${searchTerm}`);
};
