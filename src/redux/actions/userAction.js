import { FETCH_USERS, SET_USERS } from "../constants/actionTypes";

export const fetchUsers = () => ({
    type: FETCH_USERS,
});

export const setUsers = (userId) => ({
    type: SET_USERS,
    payload: userId,
});
