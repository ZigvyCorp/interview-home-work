import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from "./actions"
const initialState = {
  state: "",
  data: [],
  user: {},
  comments: [],
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        state: action.type,
        data: action.payload,
        error: null,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        state: action.type,
        comments: action.payload,
        error: null,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        state: action.type,
        user: action.payload,
        error: null,
      };
    case FETCH_DATA_FAILURE || FETCH_USER_FAILURE || FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
