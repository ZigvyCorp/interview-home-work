import { SET_COMMENTS_POST } from "../actions/commentActions";

const initialState = {
  comments: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS_POST:
      return {
        ...state,
        comments: action.comments,
      };
    default:
      return state;
  }
};

export default commentReducer;
// Error
