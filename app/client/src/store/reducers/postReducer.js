import { ActionTypes } from "../actions/postActions";

const initialState = {
  list: [],
  total: 0,
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: null };

    case ActionTypes.FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, list: action.payload.list, total: action.payload.count };

    case ActionTypes.FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default postsReducer;
