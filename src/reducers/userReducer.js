import { GET_USERS } from "../actions/const";

const initialState = {
    users: [],
    user: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export default userReducer;