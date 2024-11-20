import { buildParametersUrl } from "../common/utilities";
import axiosInstance from "./axiosInstance";

const getAllPosts = async (query) => {
  const customQuery = buildParametersUrl({
    _page: query?.page,
    title_like: query?.title,
  });

  return await axiosInstance.get(`/posts?${customQuery}`);
};

const getPost = async (postId) => {
    return await axiosInstance.get(`/posts/${postId}`);
  };

export default {
  getAllPosts,
  getPost,
};
