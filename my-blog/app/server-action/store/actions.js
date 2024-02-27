export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const SET_POSTS = "SET_POSTS";
export const SET_SELECTED_POST = "SET_SELECTED_POST";
export const SET_LOADING = "SET_LOADING";
export const SET_USERS = "SET_USERS";
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const SET_COMMENTS = "SET_COMMENTS";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

export const setSearchTerm = (searchText) => ({
  type: SET_SEARCH_TERM,
  searchText,
});

export const fetchComments = () => ({
  type: FETCH_COMMENTS,
});

export const setComments = (comments) => ({
  type: SET_COMMENTS,
  comments,
});

export const fetchPosts = (searchText) => ({
  type: FETCH_POSTS,
  searchText
});

export const fetchPost = (postId) => ({
  type: FETCH_POST,
  postId,
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  posts,
});

export const setSelectedPost = (post) => ({
  type: SET_SELECTED_POST,
  post,
});

export const savePostId = (postId) => ({
  type: 'SAVE_POST_ID',
  payload: postId,
});