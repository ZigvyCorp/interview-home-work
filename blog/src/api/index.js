import axios from "axios";
const clientAxios = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
  withCredentials: true,
});

clientAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
clientAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default clientAxios;

export const fetchPosts = () => clientAxios.get("/posts");
export const createPost = (payload) => clientAxios.post("/posts", payload);
export const fetchComments = () => clientAxios.get("/comment/all");
export const createComment = (payload) =>
  clientAxios.post("/comment/add", payload);

export const updatePost = (payload) =>
  clientAxios.post(`/posts/update`, payload).then((res) => {});

export const login = (payload) => clientAxios.post("/auth/login", payload);
