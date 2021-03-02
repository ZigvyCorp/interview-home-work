import axios from 'axios';

export const requestGetComments = () => {
  return axios.request({
    method: 'get',
    url: '/api/comments',
  });
};
