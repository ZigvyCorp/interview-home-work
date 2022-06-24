import axiosClient from "./axiosClient";

const getPosts = async() => {
    const url = `/posts/all`;
    const response = await axiosClient.get(url);
    return response.data;
};
const getPostsAndPanigate = async(page,pagesize) => {
    const url = `/posts?page=${page}&pagesize=${pagesize}`;
    const response = await axiosClient.get(url);
    return response.data;
};
const searchPosts = async(keyword) => {
    const url = `/posts/search?query=${keyword}`;
    const response = await axiosClient.get(url);
    return response.data;
};
const getPostsById = async(id) => {
    const url = `/posts/${id}`;
    const response = await axiosClient.get(url);
    return response.data;
}

export {
    getPosts,
    getPostsAndPanigate,
    searchPosts,
    getPostsById
};