import axiosInstance from "./axiosInstance";

const getComments = async (postId) => {
  return await axiosInstance.get(`/posts/${postId}/comments`);
};

export default {
    getComments,
};
