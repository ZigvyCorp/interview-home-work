const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case 'FETCH_POSTS_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'CREATE_POSTS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'CREATE_POST_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
