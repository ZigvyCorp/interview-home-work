import axios from 'axios';
import baseURL from './baseURL';

export const getListPostData = async (valuePagination) => {
    const { data } = await axios.post(`${baseURL.serverURL}/api/posts`, valuePagination);
    return data;
};
export const getCommentsInPostData = async (_id) => {
    const { data } = await axios.post(`${baseURL.serverURL}/api/posts/comments`, _id);
    return data;
};

export const searchPostData = async (valueSearch) => {
    const { data } = await axios.post(`${baseURL.serverURL}/api/posts/search`, valueSearch);
    return data;
};
