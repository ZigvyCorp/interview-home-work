import { http } from "./axios";

export const getPostRequest = () => {
  return http.get("/post");
};

export const getPostDetailRequest = (id) => {
  return http.get("/post/" + id);
};

