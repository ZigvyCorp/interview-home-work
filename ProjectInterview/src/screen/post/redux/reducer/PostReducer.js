import { types } from "../actions/postAction";

const initialState = {
    items: []
};

export const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.POSTS_RESPONSE:
        return {
          ...state,
          items: action.payload
        };
      default:
        return state;
    }
};