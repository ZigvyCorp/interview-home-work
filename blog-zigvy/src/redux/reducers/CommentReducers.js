
import { FETCH_COMMENT } from "../constants";

const initialState = {
  comments: [],
};

const commentReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENT:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export default commentReducers;
