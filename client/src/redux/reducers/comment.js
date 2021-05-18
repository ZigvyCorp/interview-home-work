import { INIT_STATE } from '../../constant';
import { getType, hideComment, showComment } from '../actions';

export default function commentReducers(state = INIT_STATE.modal, action) {
  switch (action.type) {
    case getType(showModal):
      return {
        isShow: true,
      };
    case getType(hideModal):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}