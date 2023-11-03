import { createSelector } from "reselect";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'USERS_FETCH_REQUESTED':
      return {
        ...state,
        isLoading: true
      };
    case 'USERS_FETCH_SUCCEEDED':
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: null,
      };
    case 'USERS_FETCH_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state;
  }
}

const selectUsers = (state) => state.users.users;

const selectUserById = (id) => createSelector(
  selectUsers,
  (users) => users?.find(user => user._id === id)
);

export { selectUsers, selectUserById };

export default usersReducer;
