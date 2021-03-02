import axios from 'axios';

export function requestGetPosts() {
  return axios.request({
    method: 'get',
    url: '/api/posts',
  });
}
