// Import Actions
import { GET_COMMENTS_SUCCESS } from '../actions/ActionsType';

// Initial State
const initialState = {
  data: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_SUCCESS:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getComments = state => state.comments.data;

// Export Reducer
export default UserReducer;
