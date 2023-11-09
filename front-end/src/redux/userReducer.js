import { Types } from "./Types"

const initState = {
  users: [],
  user: {}
}

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.fetchUsers:
      return {
        ...state,
        users: action.payload
      }
    case Types.fetchUserById:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
