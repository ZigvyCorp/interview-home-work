import { cloneDeep } from 'lodash';
import { FETCH_POSTS_SUCCESS, PostActionTypes } from '../types/post.type';

interface PostState {
  posts: Array<any> | undefined;
}

const initialState: PostState = {
  posts: undefined,
};

export function postReducer(state: PostState = initialState, action: PostActionTypes): PostState {
  const newState = cloneDeep(state);

  switch (action.type) {
    
    case FETCH_POSTS_SUCCESS: {
      newState.posts = cloneDeep(action.payload)
      return newState;
    }
    
    default:
      return newState;
  }
};