/* eslint-disable no-case-declarations */
import {
    GET_COMMENTS_BY_POST_ID_FAILURE,
    GET_COMMENTS_BY_POST_ID_REQUEST,
    GET_COMMENTS_BY_POST_ID_SUCCESS,
  } from "../actions/commentActions";
  
  const initialState = {
    loading: false,
    comments: [],
    error: null,
  };
  
  const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      /**Get comments by postID action */
      case GET_COMMENTS_BY_POST_ID_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_COMMENTS_BY_POST_ID_SUCCESS:
        const { postID, response, page, perPage } = action.payload;
        return {
          ...state,
          loading: false,
          comments: [
            ...state.comments.filter((comment) => comment.postID !== postID),
            {postID, page, perPage, total: response.total, data: response.data},
          ],
        }
        
      case GET_COMMENTS_BY_POST_ID_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }
  
      default:
        return state;
    }
  };
  
  export const selectComments = (state) => state.comments.comments;
  export const selectCommentsLoading = (state) => state.comments.loading;
  export const selectCommentsError = (state) => state.comments.error;
  
  export default commentReducer;
  