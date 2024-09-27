import { POST_FETCH_SUCCEED } from "../../constant/redux/action";

const initialState: Post[] = [];

export function postReducer(state = initialState, action: any) {
  switch (action.type) {
    case POST_FETCH_SUCCEED:
      console.log(action)
      return [...action.post];
    case "post/createPost":
      return { ...state, value: state };

    default:
      return state;
  }
}
