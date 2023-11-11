import { ACTION_TYPES } from "../actions/postsAction";

// Define initial states.
const initialState = {
  postsList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
      
    case ACTION_TYPES.POSTS_FETCHED:
      console.log(action);
      return { ...state, postsList: action.payload };

    default:
      return state;
  }
};
