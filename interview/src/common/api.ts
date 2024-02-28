import axios from "axios";
import { Config } from "../Config";

export const Api = axios.create({
  baseURL: Config.baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

function* getAllPosts(): Generator<any, void, any> {
  const response = yield Api.get("posts");
  return response.data;
}
function* getCommentByPostId(postId: number): Generator<any, void, any> {
  const response = yield Api.get(`comments?postId=${postId}`);
  return response.data;
}

function* getAlluser(): Generator<any, void, any> {
  const response = yield Api.get(`users`);
  return response.data;
}

function* getPostById(postId: number): Generator<any, void, any> {
  const response = yield Api.get(`posts/${postId}`);
  return response.data;
}

export const api = { getAllPosts, getCommentByPostId, getAlluser, getPostById };
