import {
    GET_POSTS,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from "../constants/index";

  const initialState = {
    data: null,
    loading: false,
    error: null,
  };

  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_POSTS:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export default postReducer;