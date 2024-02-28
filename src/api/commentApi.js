import axiosInstance from "./axiosInstance";

export const getComments = async (postId) => {
    return await axiosInstance.get(`/posts/${postId}/comments`);
};
