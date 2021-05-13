import {
  ADD__COMMENT,
  DETAIL__COMMENT,
  GET__COMMENTS,
} from "../../types/postComponent";

const stateDefault = {
  commentsStore: [],
  commentDetail: [],
};

export const commentsReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET__COMMENTS: {
      state.commentsStore = [...action.commentsStore];
      return { ...state };
    }

    case DETAIL__COMMENT: {
      state.commentDetail = [...action.commentDetail];
      return { ...state };
    }

    case ADD__COMMENT: {
      state.commentDetail = [...state.commentDetail, action.comment];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
