import apiService from "./apiService";

const BASE_POSTS_URL = "/posts";

const postApi = {
  getPosts: async (page) => {
    try {
      const data = await apiService.get(`${BASE_POSTS_URL}?_page=${page}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  searchPosts: async (keyWord) => {
    try {
      const data = await apiService.get(`${BASE_POSTS_URL}?title=${keyWord}`);
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
