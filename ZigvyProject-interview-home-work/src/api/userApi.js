import axiosInstance from "./axiosInstance";

// export const getUserByPostId = async (postId) => {
//   return await axiosInstance.get(`/users/?id=${postId}`);
// };

export const getUserById = async (userId) => {
  return await axiosInstance.get(`user/getUserById/${userId}`);
};

export const login = async () => {
  return await axiosInstance.post(`user/login`);
};

export const register = async (data) => {
  return await axiosInstance.post(`user/register`, data);
};

export const logout = async () => {
  return await axiosInstance.post(`user/logout`);
};
