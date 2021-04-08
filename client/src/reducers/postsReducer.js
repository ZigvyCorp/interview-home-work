const API_CALL_REQUEST_POSTS = "API_CALL_REQUEST_POSTs";
const API_CALL_REQUEST_POST = "API_CALL_REQUEST_POST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

const initialState = {
  fetching: false,
  data: null,
  error: null,
};

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST_POSTS:
      return { ...state, fetching: true, error: null };
    case API_CALL_REQUEST_POST:
      return { fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, data: action.data };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error };
    default:
      return state;
  }
}
