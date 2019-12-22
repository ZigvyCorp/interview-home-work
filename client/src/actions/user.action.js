import { userConstants } from '../constants/user.constants';
import {getUserAPI} from '../services/api/user';

export const userAction = {
    getUsers,
    login,
    clear_error,
    register,
    clear_error_register
};

function getUsers()
{
    return dispatch => {
        getUserAPI.getUsers().then(respond => {
            dispatch({type: userConstants.GET_USERS, data: respond.users})
        });
    };
}

function login(values)
{
    function request() { return { type: userConstants.LOGIN_REQUEST} }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }

    return dispatch => {
        dispatch(request());
        getUserAPI.login(values.email, values.password).then(async res => {
            let user = await {"name" : res.user.name, "email" : res.user.email}
            await dispatch(success(user))
            await localStorage.setItem('token', res.token)
            await localStorage.setItem('userData',JSON.stringify(user))
            window.location.href= "/home"
        }).catch((message) => {
            dispatch(failure('Tài khoản và mật khẩu không đúng'))
        })
    }
}

function register(value)
{
    function request() { return { type: userConstants.REGISTER_USER_REQUEST} }
    function success() { return { type: userConstants.REGISTER_USER_SUCCESS} }
    function failure(error) { return { type: userConstants.REGISTER_USER_FAILURE, error } }
    return dispatch => {
        dispatch(request())
        getUserAPI.register(value.email,value.password,value.name).then(async res => {
            if(typeof res.token !== 'undefined' && res.token)
            {
                dispatch(success())
                window.location.href='/login'
            }
            
        }).catch((message) => {
            dispatch(failure('Tạo tài khoản thất bại'))
        })
    }
    
}

function clear_error()
{
    return dispatch => {dispatch({type: userConstants.CLEAR_ERROR_DATA})}
}
function clear_error_register()
{
    return dispatch => {dispatch({type: userConstants.REGISTER_CLEAR_ERROR_DATA})}
}


