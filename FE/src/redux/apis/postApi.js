import axiosClient from './createInstance';

export const getListPosts = async () => {
  return await axiosClient.get('/api/v1/post');
};
