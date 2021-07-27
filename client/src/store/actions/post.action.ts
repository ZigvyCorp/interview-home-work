import { CommentType, PostType } from "../../types";
import { ADD_COMMENT, CREATE_POST, GET_POST, GET_POSTS, SET_COMMENT, SET_LOADING, SET_POST, SET_POSTS } from "../types";

export const setLoading = (payload: boolean) => ({ type: SET_LOADING, payload });
export const createPost = (post: any) => ({ type: CREATE_POST, payload: post });
export const setPosts = (posts: PostType[]) => ({ type: SET_POSTS, payload: posts });
export const setPost = (payload: any) => ({ type: SET_POST, payload });
export const getPosts = (page: number) => ({ type: GET_POSTS, payload: page });
export const getPost = (payload: string) => ({ type: GET_POST, payload });
export const addComment = (payload: string, id: string) => ({ type: ADD_COMMENT, payload: { content: payload, id } });
export const setComment = (payload: CommentType, id: string) => ({
  type: SET_COMMENT,
  payload: { comment: payload, id },
});
