import axios from 'axios';

export const requestGetUsers = () => {
  return axios.request({
    method: 'get',
    url: '/api/users',
  });
};
