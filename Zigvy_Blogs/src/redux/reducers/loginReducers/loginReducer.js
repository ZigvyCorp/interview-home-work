import { NAME_EPICS } from '../../epics/loginEpic/NameEpics';
import { ACTION_STATUS } from '../../../utils/Configs';

const loginState = {
  loginStatus: ACTION_STATUS.NONE,
  loginFailedMessage: ''
};

const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case NAME_EPICS.EPIC_LOGIN_SCREEN.EPIC_LOGIN_SUCCESS:
      state = { ...state, loginStatus: ACTION_STATUS.SUCCESS };
      break;
    case NAME_EPICS.EPIC_LOGIN_SCREEN.EPIC_LOGIN_FAILED:
      state = { ...state, loginStatus: ACTION_STATUS.FAILED, loginFailedMessage: action.data };
      break;
    case NAME_EPICS.EPIC_LOGIN_SCREEN.EPIC_LOGIN_SCREEN_RESET_LOGIN_STATUS:
      state = { ...state, loginStatus: ACTION_STATUS.NONE };
      break;
    default:
      break;
  }
  return state;
};

export default loginReducer;