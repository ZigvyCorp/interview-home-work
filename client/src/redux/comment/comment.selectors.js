import { createSelector } from 'reselect';

const selectComment = (state) => state.comment;

export const selectIsCommentFetching = createSelector(
    [selectComment],
    (comment) => comment.isFetching,
);

export const selectIsCommentsLoaded = createSelector(
    [selectComment],
    (comment) => !!comment.comments,
);
