
import { HTTP } from '../../../lib/axiosClient';

export const fetchAllPostsAPI = async (page) => {
    const res = await HTTP.get('posts');
    return res.data;
};

export const fetchPostByIDAPI = async (postID) => {
    const res = await HTTP.get(`posts/${postID}`);
    return res.data;
};