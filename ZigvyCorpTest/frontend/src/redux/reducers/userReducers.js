import { userConsts } from "../constants";

const userReducerInitState = {
  // login reducer
  checkLogin: false,
  userInfo: {},

  // register reducer
  registeredUserInfomation: {}, // initRegister

  //loginStudioReducer
  loadingLoginStudio: false, // loading
  userInfoStudio: {}, //userInformation
  errorLoginStudio: false, //error
};

const userReducers = (state = userReducerInitState, action) => {
  switch (action.type) {
    case userConsts.LOGIN: {
      return {
        ...state,
        checkLogin: true,
        userInfo: action.payload,
      };
    }
    case userConsts.LOGOUT: {
      return {
        ...state,
        checkLogin: false,
        userInfo: {},
      };
    }
    case userConsts.REGISTER_SUCCESS: {
      return {
        ...state,
        registeredUserInfomation: action.payload,
      };
    }
    case userConsts.REGISTER_FAILURE | userConsts.LOGOUT_STUDIO: {
      return {
        ...state,
        registeredUserInfomation: null,
      };
    }
    case userConsts.LOGIN_STUDIO_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case userConsts.LOGIN_STUDIO_SUCCESS: {
      return {
        ...state,
        loading: false,
        userInfoStudio: action.payload,
      };
    }
    case userConsts.LOGIN_STUDIO_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case userConsts.LOGOUT_STUDIO: {
      return {
        ...state,
        userInfoStudio: {},
        registeredUserInfomation: {},
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducers;
