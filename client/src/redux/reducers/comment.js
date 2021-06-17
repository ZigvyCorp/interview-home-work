import { INIT_STATE } from '../../constant';
import { getType, hideComment, showComment } from '../actions';

export default function commentReducers(state = INIT_STATE.commentLoad, action) {
  switch (action.type) {
    case getType(showComment):
      return {
        isShowCmts: true,
      };
    case getType(hideComment):
      return {
        isShowCmts: false,
      };
    default:
      return state;
  }
}