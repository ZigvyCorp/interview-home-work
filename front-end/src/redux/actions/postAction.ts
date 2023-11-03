export const LOGIN_REQUESTING = 'LOGIN_REQUESTING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_PAGE_INIT = 'LOGIN_PAGE_INIT';

export function loginPageInit() {
    return {
        type: LOGIN_REQUESTING,
    };
}

export function loginRequest(payload: any) {
    return {
        type: LOGIN_REQUESTING,
        payload
    };
}

export function loginError(error: any) {
    return {
        type: LOGIN_ERROR,
        error,
    };
}

export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS,
    };
}