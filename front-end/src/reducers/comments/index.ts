import * as ACTION_TYPE from "../../types/comments/actionTypes";
import * as TYPE from "../../types/comments";

const initialState: TYPE.CommentsState = {
  pending: false,
  comments: [],
  error: null,
};

export function commentsReducer(
  state = initialState,
  action: TYPE.CommentsActions
): TYPE.CommentsState {
  switch (action.type) {
    case ACTION_TYPE.GET_COMMENTS_REQUEST: {
      return {
        ...state,
        pending: true,
      };
    }
    case ACTION_TYPE.GET_COMMENTS_SUCCESS: {
      const fetchComments = [...state.comments, ...action.payload.comments];
      const res = fetchComments.reduce<TYPE.IComment[]>((acc, comment) => {
        const checkDup = acc.filter((c) => c._id === comment._id);
        if (checkDup.length === 0) acc.push(comment);
        return acc;
      }, []);

      return {
        ...state,
        pending: false,
        comments: res,
        error: null,
      };
    }
    case ACTION_TYPE.GET_COMMENTS_FAILURE:
      return {
        ...state,
        pending: false,
        comments: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}
