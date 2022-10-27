import { types } from '../actions';

const initialState = {
    items: []
};

export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.GET_USERS_SUCCESS:
        return {
          ...state,
          items: action.payload
        };
      default:
        return state;
    }
};