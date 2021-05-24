import _ from 'lodash';
import {
  FETCH_ALL_POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
  FETCH_POST_SUCCESS
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_SUCCESS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case CREATE_POST_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_POST_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };    
    default:
      return state;
  }
};
