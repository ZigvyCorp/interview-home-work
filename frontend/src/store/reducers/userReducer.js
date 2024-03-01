import actionTypes from "../actions/actionTypes";

const initState = {
    users: [],
    user: []
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS:
            return {
                ...state,
                users: action.users || [],
            };
        case actionTypes.GET_USER_BY_ID:
            return {
                ...state,
                user: action.user || [],
            }
        default:
            return state;
    }
};

export default userReducer;