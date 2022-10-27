import { types } from '../actions';

const initialState = {
    items: []
};

export const CommentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.GET_COMMENT_SUCCESS:
        return {
          ...state,
          items: action.payload
        };
      default:
        return state;
    }
};