import axiosClient from './axiosClient';

const getPost = async (page = 1, limit = 10) => {
    const url = `api/v1/posts?page=${page}&limit=${limit}`;
    const response = await axiosClient.get(url);
    return response;
};
// return response.data;

const searchPosts = async (keyword) => {
    const url = `api/v1/posts/search?query=${keyword}`;
    const response = await axiosClient.get(url);
    return response.data;
};
const getPostsById = async (id) => {
    const url = `api/v1/posts/${id}`;
    const response = await axiosClient.get(url);
    return response.data;
};

export { getPost, searchPosts, getPostsById };
