import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).access_token
    }`;
  }

  return req;
});

const postAPI = "/api/v1/posts";
const userAPI = "/api/v1/users";

export const fecthPost = (id) => API.get(`${postAPI}/${id}`);
export const fecthPosts = (page) => API.get(`${postAPI}?page=${page}`);
export const createPost = (newPost) => API.post(postAPI, newPost);
export const deletePost = (id) => API.delete(`${postAPI}/${id}`);
export const updatePost = (id, updatePost) =>
  API.patch(`${postAPI}/${id}`, updatePost);
export const likePost = (id, updatePost) =>
  API.patch(`${postAPI}/${id}/likePost`, updatePost);
export const comment = (value, id) =>
  API.post(`${postAPI}/${id}/commentPost`, { value });
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `${postAPI}/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );

export const signUp = (newUser) => API.post(`${userAPI}/signup`, newUser);
export const signIn = (user) => API.post(`${userAPI}/signin`, user);
