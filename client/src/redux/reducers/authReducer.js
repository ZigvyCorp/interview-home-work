import * as type from "../constants/authConstant";

const initialState = {
    authData: {},
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.AUTH: {
            localStorage.setItem(
                "profile",
                JSON.stringify({ ...action?.data })
            );

            return { ...state, authData: action?.data };
        }
        case type.LOGOUT: {
            localStorage.clear();

            return { ...state, authData: null };
        }
        case type.SIGNUP: {
            return { ...state };
        }
        default:
            return state;
    }
};

export default authReducer;
