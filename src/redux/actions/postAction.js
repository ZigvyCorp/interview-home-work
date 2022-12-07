import { GET_POST_FETCH } from "../constants/postConstant";

export const getPostFetch = (posts) => ({
  type: GET_POST_FETCH,
  payload: posts,
});
