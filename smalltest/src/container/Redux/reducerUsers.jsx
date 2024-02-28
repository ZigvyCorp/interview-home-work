import { Types } from "./type.jsx";

const initialState = {
    users: [{}]
}

export const usersReducer = (state = initialState, action) => {
    console.log("action user", action.payload);
    switch (action.type) {
        case Types.loadUsers: {
            return {
                users: [...state.users, action.payload]
            }
        }
        default:
            return state
    }
}