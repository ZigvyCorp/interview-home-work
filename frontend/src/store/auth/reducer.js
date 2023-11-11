import { getToken } from "../../utils/token";
import { GET_ME, GET_ME_FAILURE, GET_ME_SUCCESS, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS } from "./actionTypes";

const initialState = {
    isLoading: false,
    token: getToken(),
    currentUser: null,
    isAuthenticated: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                isLoading: true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case LOGIN:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                token: action.payload
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false
            };
        case GET_ME:
            return {
                ...state,
            };
        case GET_ME_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                currentUser: action.payload
            };
        case GET_ME_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                currentUser: null
            };
        case LOGOUT:
            return {
                ...state,
                isLoading: false,
                currentUser: null,
                token: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default authReducer;