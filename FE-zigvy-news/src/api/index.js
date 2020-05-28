import AxiosService from '../utils/axios';
import { SERVER_URL } from '../utils/constant';

// Users
export const fetchUsers = () => {
  return AxiosService.get(`${SERVER_URL}/user`);
};

export const fetchUser = (username, password) => {
  return AxiosService.post(`${SERVER_URL}/user/login`, { username, password });
};

export const registerUser = (props) => {
  return AxiosService.put(`${SERVER_URL}/user/register`, { ...props });
};

export const updateUser = (props) => {
  return AxiosService.post(`${SERVER_URL}/user/update`, { ...props });
};

export const authorizeUser = (token) => {
  return AxiosService.get(`${SERVER_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//Comments
export const fetchCommentsOfPost = (idPost) => {
    return AxiosService.get(`${SERVER_URL}/comment/${idPost}/post`);
}

export const updateComment = (comment) => {
  return AxiosService.post(`${SERVER_URL}/comment/update`, { ...comment });
};

export const createComment = (comment) => {
  return AxiosService.put(`${SERVER_URL}/comment/create`, { ...comment });
};

export const deleteComment = (comment) => {
  return AxiosService.delete(`${SERVER_URL}/comment/delete?id=${comment._id}`);
};

//Posts
export const updatePost = (post) => {
  return AxiosService.post(`${SERVER_URL}/post/update`, { ...post });
};

export const createPost = (post) => {
  return AxiosService.put(`${SERVER_URL}/post/create`, { ...post });
};

export const deletePost = (post) => {
  return AxiosService.delete(`${SERVER_URL}/post/delete?id=${post._id}`);
};

export const fetchPosts = (props) => {
  return AxiosService.post(`${SERVER_URL}/post`, { ...props });
}

export const fetchTotalPosts = (props) => {
  return AxiosService.post(`${SERVER_URL}/post/count`, { ...props });
};

export const fetchPost = (id) => {
  return AxiosService.get(`${SERVER_URL}/post/${id}`);
};