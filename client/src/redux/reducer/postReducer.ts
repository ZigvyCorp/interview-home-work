import { notification } from "antd";
import {
  POST_FETCH_FAILED,
  POST_FETCH_SUCCEED,
} from "../../constant/redux/action";

const initialState: Post[] = [];

export function postReducer(state = initialState, action: any) {
  switch (action.type) {
    case POST_FETCH_SUCCEED:
      console.log(action);
      return [...action.post];
    case POST_FETCH_FAILED:
      notification.error({ message: "Fetch failed" });
      return { ...state };

    default:
      return state;
  }
}
