import { cloneDeep } from 'lodash';
import { CommentActionTypes, FETCH_COMMENTS_SUCCESS } from '../types/comment.type';

interface CommentState {
  comments: Array<any> | undefined;
}

const initialState: CommentState = {
  comments: undefined,
};

export function commentReducer(state: CommentState = initialState, action: CommentActionTypes): CommentState {
  const newState = cloneDeep(state);

  switch (action.type) {
    
    case FETCH_COMMENTS_SUCCESS: {
      newState.comments = cloneDeep(action.payload)
      return newState;
    }
    
    default:
      return newState;
  }
};