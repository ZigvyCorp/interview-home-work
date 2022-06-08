import apiService from "./apiService";

const BASE_POSTS_URL = "/posts";

const postApi = {
  getPosts: async () => {
    try {
      const data = await apiService.get(BASE_POSTS_URL);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  getCommentsOfPost: async (postId) => {
    try {
      const data = await apiService.get(`${BASE_POSTS_URL}/${postId}/comments`);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default postApi;
