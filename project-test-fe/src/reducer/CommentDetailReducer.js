import { types } from '../actions';

const initialState = {
    items: [],
    idPost: ''
};

export const CommentDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.GET_POSTS_COMMENT_DETAIL:
        return {
        ...state,
        idPost: action.payload
        };
      case types.GET_POSTS_COMMENT_DETAIL_SUCCESS:
        return {
          ...state,
          items: action.payload
        };
      default:
        return state;
    }
};

