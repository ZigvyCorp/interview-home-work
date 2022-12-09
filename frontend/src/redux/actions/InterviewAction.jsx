import { SEARCH_POSTS } from "../constants/Interview/InterviewConstants";

export const searchPostAction = (postSearch) => ({
  type: SEARCH_POSTS,
  postSearch: postSearch
})
