const initialState = {
  posts: [],
  loading: false,
  error: null,
  page: 1,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case "FETCH_POSTS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export default postsReducer;
