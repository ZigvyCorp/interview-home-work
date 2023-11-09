import { toast } from 'react-toastify';
import axiosClient from '../../api/axios.config';
import { login, logout } from './userSlice';
export const setAccessToken = (accessToken) => {
    localStorage.setItem('accessToken', JSON.stringify(accessToken));
};

export const getAccessToken = () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        return null;
    }

    return JSON.parse(accessToken);
};

export const removeAccessToken = () => {
    localStorage.removeItem('accessToken');
};

export const _loginPass = async (data, dispatch, navigate) => {
    let res = await axiosClient.post('/auth/login', data);
    dispatch(login(res));
    setAccessToken(res.accessToken);
    // if (res) {
    //     navigate('/');
    // }
};

export const _getSuccess = async (dispatch, navigate, user) => {
    if (user == null) {
        try {
            const res = await axiosClient.get(
                '/auth/login/success',
                { withCredentials: true },
                {
                    headers: { 'Access-Control-Allow-Credentials': true },
                },
            );
            dispatch(login(res));
            setAccessToken(res.accessToken);
        } catch (e) {
            if (
                e.response.data ===
                'Bạn không được phép cấp quyền bởi KPShop, vui lòng liên hệ quản trị để được tư vấn hỗ trợ'
            ) {
                toast.info('Bạn không được phép cấp quyền bởi KPShop, vui lòng liên hệ quản trị để được tư vấn hỗ trợ');
            }
            return e;
        }
    }
};

export const _loginPhone = async (data, dispatch, navigate) => {
    let res = await axiosClient.post('/auth/phone/signup', data);
};

export const _verifyPhone = async (data, dispatch, navigate) => {
    let res = await axiosClient.post('/auth/phone/verify', data);
    dispatch(login(res));
    setAccessToken(res.accessToken);
    // if (res) {
    //     navigate('/');
    // }
};

export const _logout = async (dispatch, navigate) => {
    try {
        const b = await axiosClient.post('/auth/logout');
        // window.open('https://kpshop-backend.onrender.com/auth/logout', '_self');
        dispatch(logout());
        removeAccessToken();
        navigate('/');
    } catch (err) {}
};

export const _logoutTest = async (dispatch) => {
    try {
        const b = await axiosClient.post('/auth/logout');
        // window.open('https://kpshop-backend.onrender.com/auth/logout', '_self');
        dispatch(logout());
        removeAccessToken();
    } catch (err) {}
};
export const _editUser = async (dispatch, data, id, axiotJWT, navigate) => {
    try {
        const res = await axiotJWT.put(`/user/edit/${id}`, data);
        toast.success('Cập nhật thông tin thành công!');
        dispatch(login(res));
    } catch (err) {
        if (err.response) {
            toast.info('Bạn không được phép cấp quyền bởi KPShop, vui lòng liên hệ quản trị để được tư vấn hỗ trợ');
            _logout(dispatch, navigate);
        }
    }
};

export const _getWishList = async (data, dispatch, axiotJWT) => {
    try {
        const res = await axiotJWT.post(`/user/getWishList/${data._id}`, data);
        dispatch(login(res));
    } catch (err) {}
};
export const _editPhone = async (dispatch, data, id, axiotJWT) => {
    try {
        const res = await axiotJWT.put(`/user/editPhone/${id}`, data);
        dispatch(login(res));
    } catch (err) {}
};

export const _editPass = async (dispatch, data, id, axiotJWT) => {
    try {
        const res = await axiotJWT.put(`/user/editPass/${id}`, data);
        dispatch(login(res));
    } catch (err) {}
};

export const _addWishList = async (dispatch, data, axiotJWT) => {
    try {
        const res = await axiotJWT.post(`/user/addToWishList/${data._id}`, data);
        dispatch(login(res));
    } catch (err) {
        console.log(err);
    }
};

export const _pushAddress = async (dispatch, data, id, axiotJWT) => {
    try {
        const res = await axiotJWT.put(`/user/pushAddress/${id}`, data);
        dispatch(login(res));
    } catch (err) {}
};
export const _popAddress = async (dispatch, data, id, axiotJWT) => {
    try {
        const res = await axiotJWT.put(`/user/popAddress/${id}`, data);
        dispatch(login(res));
    } catch (err) {}
};
export const _editAddress = async (dispatch, data, id, axiotJWT) => {
    try {
        const res = await axiotJWT.put(`/user/editAddress/${id}`, data);
        dispatch(login(res));
    } catch (err) {}
};
export const _checkPhone = async (data, id, axiotJWT) => {
    try {
        const res = await axiotJWT.post(`/user/checkPhone/${id}`, data);
        return res;
    } catch (err) {}
};

export const _checkMail = async (dispatch, data, id, axiotJWT) => {
    try {
        const res = await axiotJWT.post(`/user/checkMail/${id}`, data);
        return res;
    } catch (err) {}
};
export const _checkPassword = async (data, id, axiotJWT) => {
    try {
        const res = await axiotJWT.post(`/user/checkPassword/${id}`, data);
        return res;
    } catch (err) {}
};
export const _changeMail = async (data, axiotJWT, id) => {
    try {
        const res = await axiotJWT.post(`/services/changeEmail/${id}`, data);
    } catch (err) {}
};

export const _verifyChangeMail = async (data, axiotJWT, id) => {
    try {
        const res = await axiotJWT.post(`/services/verifyChangeEmail${id}`, data);

        return res;
    } catch (err) {}
};

export const _forgetPass = async (data, axiotJWT, id) => {
    try {
        const res = await axiotJWT.post(`/services/forgetPassword/${id}`, data);
    } catch (err) {}
};

export const _editForgetPassword = async (data, axiotJWT, id) => {
    try {
        const res = await axiotJWT.post(`/services/editForgetPassword/${id}`, data);
    } catch (err) {}
};
export const _loginSucessPhone = async (data, dispatch) => {
    try {
        const res = await axiosClient.post('/auth/loginSucessPhone', data);
        dispatch(login(res));
    } catch (err) {}
};

export const _succesOrder = async (data, axiotJWT, id) => {
    try {
        const res = await axiotJWT.post(`/services/sucessOrder/${id}`, data);
    } catch (err) {}
};
