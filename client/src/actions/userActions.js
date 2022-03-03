import {GET_ALL_USERS,GET_ALL_USERS_SUCCESS} from './actionCreator';

export const getUsers = () =>{
    return {
        type:GET_ALL_USERS,
        payload: [] 
    }
}

export const getUsersSuccess = (users) =>{
    return {
        type:GET_ALL_USERS_SUCCESS,
        payload: users 
    }
}

