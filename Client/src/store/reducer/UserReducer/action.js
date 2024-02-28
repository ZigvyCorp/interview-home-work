import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'src/services/auth/apis.js';
import { API_URL_APP } from 'src/apis/index.js';
import { apiUser } from 'src/apis/user.js';

const keyReducer = {
    getList: apiUser.userList,
    getUserDetail: 'getUserDetail'
}

const getListUser = createAsyncThunk(keyReducer.getList, async () => {
    return await callApi({
        method: 'get',
        url: API_URL_APP.users.userList
    })
})

const getUserDetail = createAsyncThunk(keyReducer.getUserDetail, async (id) => {

    return await callApi({
        method: 'get',
        url: API_URL_APP.users.userDetail(id)
    })

})

export {
    getListUser,
    getUserDetail
}
