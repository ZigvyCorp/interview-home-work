import { GET_COMMENTS_SUCCESS } from "../actions";

const commentsReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case GET_COMMENTS_SUCCESS:
      return { ...state, comments: action.comments };
    default:
      return state;
  }
};

export default commentsReducer;
