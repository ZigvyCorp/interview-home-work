import { NAME_ACTIONS } from './ActionNames';

export function login(userName, password) {
    return {
      type: NAME_ACTIONS.LOGIN.LOGIN_SCREEN,
      typeAction: NAME_ACTIONS.LOGIN.LOGIN_SCREEN_LOGIN,
      data: { userName: userName, password: password},
    };
}

export function resetLoginStatus(){
    return {
        type: NAME_ACTIONS.LOGIN.LOGIN_SCREEN,
        typeAction: NAME_ACTIONS.LOGIN.LOGIN_SCREEN_RESET_LOGIN_STATUS,
    };
}