const initialState = {
  posts: [],
  filterPosts: [],
  selectedPost: {},
  comments: [],
  loading: false,
  error: '',
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_POSTS_SUCCESS':
      return { ...state, loading: false, posts: action.payload , error: '' };
    case 'FETCH_POSTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'FETCH_POST_BY_ID_REQUEST':
      return { ...state, loading: true }; 
    case 'FETCH_POST_BY_ID_SUCCESS':
      return { ...state, loading: false, selectedPost: action.payload, error: '' }; 
    case 'FETCH_POST_BY_ID_FAILURE':
      return { ...state, loading: false, error: action.payload }; 
    case 'FILTER_POST':
      return { ...state, filterPosts: action.payload }; 
    default:
      return state;
  }
};

module.exports = postReducer;
