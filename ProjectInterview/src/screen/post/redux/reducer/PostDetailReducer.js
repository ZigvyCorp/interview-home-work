import { types } from "../actions/postAction";

const initialState = {
    items: [],
    idPost: ''
};

export const PostsDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.POSTS_REQUEST_DETAIL:
        return {
        ...state,
        idPost: action.payload
        };
      case types.POSTS_REQUEST_DETAIL_RESPONSE:
        return {
          ...state,
          items: action.payload
        };
      default:
        return state;
    }
};

