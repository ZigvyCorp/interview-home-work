import { ADD_POST, GET_POST } from "../actions/post";

const initialState = {
  postList: []
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, postList: [...state.postList, action.payload] };
    case GET_POST:
      return { ...state, postList: action.payload };
    default:
      return state;
  }
}
