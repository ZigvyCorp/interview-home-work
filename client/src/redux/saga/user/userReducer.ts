import { GET_USER, GET_USERS } from "../action";
import { IUser } from './model'

interface IUserAction {
    type: string
    users: IUser[]
    user: IUser
}

const createEmty = () => {
    return {
        users: [] as IUser[],
        user: {} as IUser
    }
}

export const userReducer = (state = createEmty(), action: IUserAction) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.users }
        case GET_USER:
            return { ...state, user: action.user }
        default:
            return state
    }
}