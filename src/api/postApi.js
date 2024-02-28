import axiosInstance from "./axiosInstance";

export const getAllPost = async (page = 1, searchTerm = "") => {
    return await axiosInstance.get(
        `/posts?page=${page}&searchTerm=${searchTerm}`
    );
};

export const getPostById = async (postId) => {
    return await axiosInstance.get(`/posts/${postId}`);
};
