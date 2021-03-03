import {
  SET_USERS,
  USER_FETCH_FAIL,
  USER_FETCH_SUCCESS,
} from '../constants/userConstants';

export const getUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case SET_USERS:
      return { users: action.payload };
    default:
      return state;
  }
};

export const getUserByIdReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case USER_FETCH_SUCCESS:
      // Temporary solution, and it's bad!!!
      const stringifyState = state.user.map((user) => JSON.stringify(user));

      if (!stringifyState.includes(JSON.stringify(action.payload))) {
        return { user: [...state.user, action.payload] };
      } else {
        return { ...state };
      }

    case USER_FETCH_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
