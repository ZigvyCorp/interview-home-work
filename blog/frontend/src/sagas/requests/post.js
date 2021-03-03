import axios from 'axios';

export const requestGetPosts = (keyword, pageNumber) => {
  return axios.request({
    method: 'get',
    url: `/api/posts?keyword=${keyword}&pageNumber=${pageNumber}`,
  });
};
