import * as actionTypes from "../utils/action-types";

export const showLoading = () => {
  return {
    type: actionTypes.SHOW_LOADING,
  };
};

export const hideLoading = () => {
  return {
    type: actionTypes.HIDE_LOADING,
  };
};

// LOGIN
export const fetchUser = (username, password) => {
  return {
    type: actionTypes.FETCH_USER,
    username,
    password
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    data,
  };
};

export const fetchUserFailed = () => {
  return {
    type: actionTypes.FETCH_USER_FAILED,
  };
};

// POSTS LIST
export const setTotalPosts = (data) => {
  return {
    type: actionTypes.SET_TOTAL_POSTS,
    data
  };
};

export const fetchPosts = (options) => {
  return {
    type: actionTypes.FETCH_POSTS,
    options
  };
};

export const fetchPostsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    data,
  };
};

export const fetchPostsFailed = () => {
  return {
    type: actionTypes.FETCH_POSTS_FAILED,
  };
};

// USER LIST
export const fetchUsers = () => {
  return {
    type: actionTypes.FETCH_USERS,
  };
};

export const fetchUsersSuccess = (data) => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    data,
  };
};

export const fetchUsersFailed = () => {
  return {
    type: actionTypes.FETCH_USERS_FAILED,
  };
};

// COMMENTS LIST
export const fetchComments = () => {
  return {
    type: actionTypes.FETCH_COMMENTS,
  };
};

export const fetchCommentsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_COMMENTS_SUCCESS,
    data,
  };
};

export const fetchCommentsFailed = () => {
  return {
    type: actionTypes.FETCH_COMMENTS_FAILED,
  };
};

// POST
export const fetchPost = (id) => {
  return {
    type: actionTypes.FETCH_POST,
    id
  };
};

export const fetchPostSuccess = (data) => {
  return {
    type: actionTypes.FETCH_POST_SUCCESS,
    data,
  };
};

export const fetchPostFailed = () => {
  return {
    type: actionTypes.FETCH_POST_FAILED,
  };
};

export const createComment = (comment) => {
  return {
    type: actionTypes.CREATE_COMMENT,
    comment,
  };
};

export const updateComment = (comment) => {
  return {
    type: actionTypes.UPDATE_COMMENT,
    comment,
  };
};

export const deleteComment = (comment) => {
  return {
    type: actionTypes.DELETE_COMMENT,
    comment,
  };
};


export const createPost = (post) => {
  return {
    type: actionTypes.CREATE_POST,
    post,
  };
};

export const updatePost = (post) => {
  return {
    type: actionTypes.UPDATE_POST,
    post,
  };
};

export const deletePost = (post) => {
  return {
    type: actionTypes.DELETE_POST,
    post,
  };
};

export const createUser = (user) => {
  return {
    type: actionTypes.CREATE_USER,
    user,
  };
};

export const updateUser = (user) => {
  return {
    type: actionTypes.UPDATE_USER,
    user,
  };
};

export const fetchCommentSuccess = (data) => {
  return {
    type: actionTypes.FETCH_COMMENT_SUCCESS,
    data,
  };
};

export const fetchUpdatedPostSuccess = (data) => {
  return {
    type: actionTypes.FETCH_UPDATED_POST_SUCCESS,
    data
  } 
}
