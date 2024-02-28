import {
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAILED,
  GET_COMMENT_REQUEST,
} from "../actions/comment";
import { Comment } from "../models/comment";


const initPostState = {
  comment: {},
};

interface Action {
  type: string;
  payload: any;
}

export const CommentReducer = (
  state: any = initPostState,
  action: Action
): Comment => {
  switch (action.type) {
    case GET_COMMENT_REQUEST:
      return state;
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        comment: action.payload,
      };
    case GET_COMMENT_FAILED:
      return state;
    default:
      return state;
  }
};
export default CommentReducer;
