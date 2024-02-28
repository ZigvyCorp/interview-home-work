import axiosInstance from "./axiosInstance";

// export const getAllPostByPage = async (page = 1, limit=2) => {
//   return await axiosInstance.get(`/posts?_page=${page}&_limit=${limit}`);
// };
export const getAllPostByPage = async ({ page, limit = 5 }) => {
  return await axiosInstance.get(
    `post/getAllPosts?page=${page}&limit=${limit}`
  );
};

export const getAllPostByTitle = async ({ title, page, limit = 5 }) => {
  return await axiosInstance.get(
    `post/getAllPosts?title=${title}&page=${page}&limit=${limit}`
  );
};

export const getAllPosts = async () => {
  return await axiosInstance.get("post");
};

export const getCommentByPostId = async (postId) => {
  return await axiosInstance.get(`post/getCommentByPostId/${postId}`);
};
