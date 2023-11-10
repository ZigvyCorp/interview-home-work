import { INIT_STATE } from "../constant/index";
import { getComments, getType, createComment } from "../actions";

export default function CommentsReducers(state = INIT_STATE.comments, action) {
  switch (action.type) {
    case getType(getComments.getCommentsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getComments.getCommentsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload.commentFill,
      };
    case getType(getComments.getCommentsFailure):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createComment.createCommentSuccess):
      console.log(action.payload);
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
}
