export const ACTION_TYPES = {
  // Define Action types
  FETCH_POSTS: "FETCH_POSTS",
  POSTS_FETCHED: "POSTS_FETCHED"
};

// Create functions to handle your actions.
export const fetchPostsAction = (posts) => ({
  type: ACTION_TYPES.POSTS_FETCHED,
  payload: posts,
});

export default {
  fetchPostsAction,
};