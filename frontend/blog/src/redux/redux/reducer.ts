import {
    SEARCH_BLOG_REQUEST,
    SEARCH_BLOG_SUCCESS,
    SEARCH_BLOG_FAILURE,
  } from './action';
  
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const searchReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case SEARCH_BLOG_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SEARCH_BLOG_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case SEARCH_BLOG_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;