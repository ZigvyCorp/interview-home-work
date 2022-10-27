import { types } from '../actions';

const initialState = {
    items: []
};

export const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.GET_POSTS_SUCCESS:
        return {
          ...state,
          items: action.payload
        };
      default:
        return state;
    }
};