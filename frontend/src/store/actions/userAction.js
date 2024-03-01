import { apiGetUserById, apiGetUsers } from "../../services/userService";
import actionTypes from "./actionTypes";

export const getUserById = (id) => async (dispatch) => {
    try {
        const response = await apiGetUserById(id);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_USER_BY_ID,
                user: response.data.data,
            });
        } else {
            dispatch({
                type: actionTypes.GET_USER_BY_ID,
                msg: response.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_USER_BY_ID,
            users: null,
        });
    }
};

export const getUsers = () => async (dispatch) => {
    try {
        const response = await apiGetUsers();
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_USERS,
                users: response.data.data,
            });
        } else {
            dispatch({
                type: actionTypes.GET_USERS,
                msg: response.data.msg,
            });
        }
    } catch (error) {

    }
}