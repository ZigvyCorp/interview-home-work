import { userConstants } from '../constants/user.constants';
import {getUserAPI} from '../services/api/user';

export const userAction = {
    getUsers
};

function getUsers()
{
    return dispatch => {
        getUserAPI.getUsers().then(respond => {
            dispatch({type: userConstants.GET_USERS, data: respond.users})
        });
    };
}


