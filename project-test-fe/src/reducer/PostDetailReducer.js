import { types } from '../actions';

const initialState = {
    items: [],
    idPost: ''
};

export const PostsDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.GET_POSTS_REQUEST_DETAIL:
        return {
        ...state,
        idPost: action.payload
        };
      case types.GET_POSTS_REQUEST_DETAIL_SUCCESS:
        return {
          ...state,
          items: action.payload
        };
      default:
        return state;
    }
};

