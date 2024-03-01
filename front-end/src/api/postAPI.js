import axios from "axios";
import config from "../config.json";

const apiCommentEndPoint = config.apiEndPoint + "posts";

export async function getPosts(page) {
  return axios.get(apiCommentEndPoint + `?page=${page}&limit=${5}`);
}
export async function getPostById(id) {
  return axios.get(apiCommentEndPoint + `/${id}`);
}
export async function searchPosts(title) {
  return axios.get(apiCommentEndPoint + `/search?title=${title}`);
}
