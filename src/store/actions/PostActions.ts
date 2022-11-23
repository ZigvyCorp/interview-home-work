import { BaseAction } from "./BaseAction";
import { PostActionType } from "../actionTypes";
import { Posts } from "../../API/Post/Interface";

const fetchPosts = (): BaseAction => ({
  type: PostActionType.fetchPosts,
});
const fetchPostsDetail = (): BaseAction => ({
  type: PostActionType.fetchPostsDetail,
});

const setPosts = (payload: Posts.FetchPostsResponse): BaseAction => ({
  type: PostActionType.setPosts,
  payload,
});

const setPostsDetail = (payload: Posts.Post, idPost: string): any => ({
  type: PostActionType.setPostsDetail,
  payload,
  idPost,
});

export default {
  fetchPosts,
  fetchPostsDetail,
  setPosts,
  setPostsDetail,
};
