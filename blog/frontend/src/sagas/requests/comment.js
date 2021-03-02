import axios from 'axios';

export const requestGetComments = () => {
  return axios.request({
    method: 'get',
    url: '/api/comments',
  });
};

export const requestGetCommentsByPostId = (id) => {
  return axios.request({
    method: 'get',
    url: `/api/posts/${id}/comments`,
  });
};
