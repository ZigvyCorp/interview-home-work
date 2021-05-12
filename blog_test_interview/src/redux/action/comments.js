import * as type from "../types";

export function getComments(comments) {
  return {
    type: type.GET_COMMENTS_REQUESTED,
    payload: comments,
  };
}
