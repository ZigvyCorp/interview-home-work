import postAction from "../action/postAction";

const initialState = {
  posts: [],
};

const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case postAction.GET_POST_SUCCESS:
      return {
        ...state,
        posts: action.data,
      };
    default:
      return state;
  }
};

export default postReducers;
