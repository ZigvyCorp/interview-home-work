import * as types from '../actions/actionTypes';

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');
const initialState = token ? { loggedIn: true, user, token } : {}

export default function sessionReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            debugger;
            localStorage.setItem('user', action.userdata.user);
            localStorage.setItem('token', action.userdata.token);
            return {
                loggedIn: true,
                user: action.user,
                token: action.token
            };
        case types.LOGIN_FAILURE:
            return {};
        case types.LOGOUT:
            return {};
        default:
            return state;
    }
}