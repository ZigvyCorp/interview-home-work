const initialState = {
    posts: [],
    loading: false,
    error: null,
  };
  
  const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COMMENTS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_COMMENTS_SUCCESS':
        return {
          ...state,
          posts: action.payload,
          loading: false,
        };
      case 'FETCH_COMMENTS_FAILURE':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default commentsReducer;