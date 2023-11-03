import {
    GET_POST_DETAIL,
    FETCH_POST_DETAIL_SUCCESS,
    FETCH_POST_DETAIL_FAILURE,
  } from "../constants/index";
  
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  
  const postDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_POST_DETAIL:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_POST_DETAIL_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case FETCH_POST_DETAIL_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  
  
  export default postDetailReducer;
  