
import { HTTP } from '../../../lib/axiosClient';

export const fetchAllPostsAPI = async (page) => {
    const res = await HTTP.get(`posts?page=${page}`);
    return res.data;
};

export const fetchPostByIDAPI = async (postID) => {
    const res = await HTTP.get(`posts/${postID}`);
    return res.data;
};