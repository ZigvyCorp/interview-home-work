import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'src/services/auth/apis.js';
import { API_URL_APP } from 'src/apis/index.js';
import { apiUser } from 'src/apis/user.js';

const keyReducer = {
    getList: apiUser.userList,
    getUserDetail: 'getUserDetail'
}

const getListUser = createAsyncThunk(keyReducer.getList, async () => {
    const res = await callApi({
        method: 'get',
        url: API_URL_APP.users.userList
    })
    return res
})

const getUserDetail = createAsyncThunk(keyReducer.getUserDetail, async (id) => {
    const postList = await callApi({
        method: 'get',
        url: API_URL_APP.posts.postList
    })

    const userList = await callApi({
        method: 'get',
        url: API_URL_APP.users.userList
    })

    const commentList = await callApi({
        method: 'get',
        url: API_URL_APP.comments.commentList
    })

    const user = userList.filter(x => x.id === parseInt(id))[0]
    const posts = postList.filter(x => x.userId === parseInt(id))


    return {
        ...user,
        posts: posts.map(post => ({
            ...post,
            comments: commentList.filter(comment => comment.postId === post.id)
        })),
    }

})

export {
    getListUser,
    getUserDetail
}
