import { GET_COMMENTS_FETCH } from "../constants/commentConstant";

export const getCommentFetch = (id) => ({
  type: GET_COMMENTS_FETCH,
  payload: id,
});
