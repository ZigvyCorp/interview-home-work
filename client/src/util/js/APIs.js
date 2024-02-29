import { get } from './APICaller';
import { API_URL } from './constant';

//#region Post
export const getPosts = () => {
  return get(`${API_URL}/post/get-posts`);
};
//#endregion

//#region Comment
export const getComments = () => {
  return get(`${API_URL}/comment/get-comments`);
};
//#endregion
