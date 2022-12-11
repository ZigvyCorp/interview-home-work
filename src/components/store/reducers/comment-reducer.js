import {
  deserializeMap,
  serializeMap
} from '../../../helpers/object-helper';
import * as actions from '../actions/comment-actions';

const initialState = {
  isFetching: true,
  hasError: false,
  // use Map to update store (cache) easily when needed
  commentsData: JSON.stringify(new Map()), //key: commentId, value: commentData (name, content, email, etc)
  commentsCount: JSON.stringify(new Map()) //key: postId, value: total comments (a number)
};

function commentReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_COMMENTS:
      return {
        ...state,
        isFetching: true,
        hasError: false
      };
    case actions.GET_COMMENTS_SUCCESS:
      const updatedCommentsData = new Map([
        ...deserializeMap(state.commentsData),
        ...action.commentsDataMap
      ]);

      const serializedCommentData = serializeMap(updatedCommentsData);

      return {
        ...state,
        commentsData: serializedCommentData,
        isFetching: false,
        hasError: false
      };

    case actions.GET_COMMENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true
      };

    //====
    //Fake, since we have no API to fetch total comments without fetching whole comments data
    case actions.GET_TOTAL_COMMENTS:
      return {
        ...state,
        hasError: false
      };
    case actions.GET_TOTAL_COMMENTS_SUCCESS:
      const updatedCommentsCount = new Map([
        ...deserializeMap(state.commentsCount),
        ...action.totalCommentsMap
      ]);

      const serializedCommentsCount = serializeMap(
        updatedCommentsCount
      );

      return {
        ...state,
        commentsCount: serializedCommentsCount,
        hasError: false
      };

    case actions.GET_TOTAL_COMMENTS_FAILURE:
      return {
        ...state,
        hasError: true
      };

    default:
      return state;
  }
}

export default commentReducer;
