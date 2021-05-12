import * as type from "../types";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case type.GET_COMMENTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.comments,
      };
    case type.GET_COMMENTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
