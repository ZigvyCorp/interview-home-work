import * as type from "../types";

export function getPosts(posts) {
  return {
    type: type.GET_POSTS_REQUESTED,
    payload: posts,
  };
}
