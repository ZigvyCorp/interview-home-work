import { RootState } from "../../store/configureStore";
import { CommentState } from "../../types/Comment/types";
import {
  CREATE_COMMENT_SUCCESS,
  GET_COMMENT,
  GET_COMMENT_FAILURE,
  GET_COMMENT_SUCCESS,
} from "../actions/actions";
import {
  CommentAction,
  createCommentSuccess,
  getCommentSuccess,
} from "../actions/commentActions";

const initialState: CommentState = {
  comments: {},
  loading: false,
};

const commentReducer = (state = initialState, action: CommentAction) => {
  switch (action.type) {
    case GET_COMMENT:
      return {
        ...state,
        loading: true,
      };
    case GET_COMMENT_SUCCESS:
      const successAction = action as ReturnType<typeof getCommentSuccess>;
      const keyPostId = `postId - ${successAction.payload.postId}`;
      return {
        ...state,
        comments: {
          ...state.comments,
          [keyPostId]: successAction.payload.comments,
        },
      };
    case GET_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case CREATE_COMMENT_SUCCESS:
      const createCommentAction = action as ReturnType<
        typeof createCommentSuccess
      >;

      const key = `postId - ${createCommentAction.payload.postId}`;
      const updatedComments = {
        ...state.comments,
        [key]: [createCommentAction.payload, ...state.comments[key]],
      };
      return {
        ...state,
        comments: updatedComments,
      };
    default:
      return state;
  }
};

export const selectComment = (state: RootState) => state.comment.comments;

export default commentReducer;
