// Import Actions
import { GET_USERS_SUCCESS } from '../actions/ActionsType';

// Initial State
const initialState = {
  data: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getUsers = state => state.users.data;

// Export Reducer
export default UserReducer;
