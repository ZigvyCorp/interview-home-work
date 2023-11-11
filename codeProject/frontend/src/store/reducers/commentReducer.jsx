// import {
//   FETCH_COMMENTS_REQUEST,
//   FETCH_COMMENTS_SUCCESS,
//   FETCH_COMMENTS_FAILURE,
// } from "../../redux/constants/commentConstants";

const initialState = {
  comments: {},
  loading: false,
  error: null,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        loading: false,
        comments: action.payload,
        error: null,
      };
    case "FETCH_COMMENTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Failed to fetch comments.",
      };
    default:
      return state;
  }
};
export default commentReducer;
