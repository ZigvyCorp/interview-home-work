import axios from 'axios';
import { urlApi } from './config';

export const getPosts = async (params) => {
  try {
    return await axios.get(`${urlApi}posts`, { params });
  } catch (error) {
    return false;
  }
};

export const getPostById = async (id) => {
  try {
    const post = await axios.get(`${urlApi}posts/${id}`);
    const comments = await axios.get(`${urlApi}comments`, { params: { postId: id } });
    const author = await axios.get(`${urlApi}users/${post?.data?.userId}`);

    const result = {
      post,
      comments,
      author,
    };
    return result;
  } catch (error) {
    return false;
  }
};
