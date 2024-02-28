import { createSlice } from '@reduxjs/toolkit'
import { getListUser, getUserDetail } from './action.js'

const initialState = {
    userList: {
        data: [],
        pagination: {
            limit: 10,
            page: 1,
            total: 0,
            totalPage: 0,
        },
    },
    userDetail: {},
    loadingUser: false
}
let data = 0
const UserReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(getListUser.pending, (state) => ({
            ...state,
            loadingUser: true,
            userList: state.userList
        }))
        addCase(getListUser.fulfilled, (state, { payload }) => ({
            ...state,
            loadingUser: false,
            userList: {
                data: payload,
                pagination: {
                    limit: 10,
                    page: 1,
                    total: 0,
                    totalPage: 0,
                },
            },
        }))
        addCase(getListUser.rejected, (state) => ({
            ...state,
            loadingUser: false,
        }))

        addCase(getUserDetail.pending, (state) => ({
            ...state,
            loadingUser: true,
            userDetail: state.userDetail
        }))
        addCase(getUserDetail.fulfilled, (state, { payload }) => {
            return ({
                ...state,
                loadingUser: false,
                userDetail: payload
            })
        })
        addCase(getUserDetail.rejected, (state) => ({
            ...state,
            loadingUser: false,
        }))
    },
})

const action = UserReducer.actions

export { action }

export default UserReducer.reducer
