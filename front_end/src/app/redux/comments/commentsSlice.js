import { createSelector } from 'reselect';

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

const commentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'COMMENTS_FETCH_REQUESTED':
      return {
        ...state,
        isLoading: true
      };
    case 'COMMENTS_FETCH_SUCCEEDED':
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
        error: null,
      };
    case 'COMMENTS_FETCH_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state;
  }
}

const selectComments = (state) => state.comments.comments;

const selectPostComments = (postId) => createSelector(
  selectComments,
  (comments) => comments?.filter(comment => comment.post === postId)
);

export {
  selectComments,
  selectPostComments,
};

export default commentsReducer;
