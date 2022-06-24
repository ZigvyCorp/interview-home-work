import axiosClient from "./axiosClient";

const getPosts = async() => {
    const url = `/posts/all`;
    const response = await axiosClient.get(url);
    return response.data;
};
const getPostsAndPanigate = async(page=1,pagesize=9) => {
    const url = `/posts?page=${page}&pagesize=${pagesize}`;
    const response = await axiosClient.get(url);
    return response.data;
};

export {
    getPosts,
    getPostsAndPanigate
};