import { commentPostIdTypes } from "../../actions-types/commentTypes";
import {
  CommentPostIdAction,
  CommentPostIdState,
} from "../../types/comment/commentPostIdType";

const initialState: CommentPostIdState = {
  loadingComment: false,
  comments: [],
  errorComment: null,
};

export default (state = initialState, action: CommentPostIdAction) => {
  switch (action.type) {
    case commentPostIdTypes.FETCH_COMMENT_POST_ID_REQUEST:
      return {
        ...state,
        loadingComment: true,
      };
    case commentPostIdTypes.FETCH_COMMENT_POST_ID_SUCCESS:
      return {
        ...state,
        loadingComment: false,
        comments: action.payload.comments,
        errorComment: null,
      };
    case commentPostIdTypes.FETCH_COMMENT_POST_ID_FAILURE:
      return {
        ...state,
        loadingComment: false,
        comments: [],
        errorComment: action.payload.errorComment,
      };
    default:
      return {
        ...state,
      };
  }
};
