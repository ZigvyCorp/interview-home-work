import axiosClient from './createInstance';

export const getListComments = async () => {
  return await axiosClient.get('/api/v1/comment');
};
