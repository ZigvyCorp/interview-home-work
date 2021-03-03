import axios from 'axios';

export const requestGetPosts = (keyword) => {
  return axios.request({
    method: 'get',
    url: `/api/posts?keyword=${keyword}`,
  });
};
