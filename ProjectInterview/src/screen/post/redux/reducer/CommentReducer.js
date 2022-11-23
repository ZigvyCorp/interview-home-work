import { types } from "../actions/postAction";

const initialState = {
    items: []
};

export const CommentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.COMMENT_RESPONSE:
        return {
          ...state,
          items: action.payload
        };
      default:
        return state;
    }
};