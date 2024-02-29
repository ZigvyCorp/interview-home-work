import {
  SET_GLOBAL_LOADING,
  SET_USER_INFO,
  SET_FILE_INFO,
} from '../action/app';

export default function appReducer(
  state = {
    globalLoading: false,
    userInfo: {},
    fileInfo: {},
  },
  action
) {
  switch (action.type) {
    case SET_GLOBAL_LOADING:
      return {
        ...state,
        globalLoading: action.payload,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case SET_FILE_INFO:
      return {
        ...state,
        fileInfo: action.payload,
      };
    default:
      return state;
  }
}
