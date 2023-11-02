import { createSelector } from "reselect";
import { AppState } from "../../reducers";

const getPending = (state: AppState) => state.comments.pending;

const getComments = (state: AppState) => state.comments.comments;

const getError = (state: AppState) => state.comments.error;

export const getCommentsSelector = createSelector(
  getComments,
  (comments) => comments
);

export const getCommentsPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getCommentsErrorSelector = createSelector(
  getError,
  (error) => error
);
