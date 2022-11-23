import { types } from "../actions/postAction";

const initialState = {
    items: []
};

export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.USERS_RESPONSE:
        return {
          ...state,
          items: action.payload
        };
      default:
        return state;
    }
};