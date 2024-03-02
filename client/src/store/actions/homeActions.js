export const LOAD_POSTS = "LOAD_POSTS";
export const LOAD_POSTS_COMPLETE = "LOAD_POSTS_COMPLETE";
export const LOAD_POSTS_FAILED = "LOAD_POSTS_FAILED";

export const LOAD_COMMENTS = "LOAD_COMMENT";
export const LOAD_COMMENTS_COMPLETE = "LOAD_COMMENT_COMPLETE";
export const LOAD_COMMENTS_FAILED = "LOAD_COMMENT_FAILED";

export const LOAD_USER = "LOAD_USER";
export const LOAD_USER_COMPLETE = "LOAD_USER_COMPLETE";
export const LOAD_USER_FAILED = "LOAD_USER_FAILED";

export const loadPostsAction = (payload) => ({
  type: LOAD_POSTS,
  payload,
});

export const loadCommentsAction = (payload) => ({
  type: LOAD_COMMENTS,
  payload,
});
export const loadUserAction = (payload) => ({
  type: LOAD_USER,
  payload,
});
