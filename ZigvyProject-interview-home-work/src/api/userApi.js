import axiosInstance from "./axiosInstance";

// export const getUserByPostId = async (postId) => {
//   return await axiosInstance.get(`/users/?id=${postId}`);
// };

export const getUserById = async (userId) => {
  return await axiosInstance.get(`user/getUserById/${userId}`);
};
