import axiosInstance from "./axiosInstance";

export const getUserByPostId = async (postId) => {
    return await axiosInstance.get(`/user/post/${postId}`);
};
