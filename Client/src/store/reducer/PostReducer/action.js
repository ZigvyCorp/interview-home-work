import {createAsyncThunk} from '@reduxjs/toolkit';
import {callApi} from 'src/services/auth/apis.js';
import {API_URL_APP} from 'src/apis/index.js';
import {apiPost} from 'src/apis/post.js';

const keyReducer = {
    getList: apiPost.postList,
    getListPostsWithUserAndComment: 'getListPostsWithUserAndComment',
    getDetail: apiPost.postDetail()
}

const getListPosts = createAsyncThunk(keyReducer.getList, async () => {
    const res = await callApi({
        method: 'get',
        url: API_URL_APP.posts.postList
    })
    return res
})

const getListPostsWithUser = createAsyncThunk(keyReducer.getListPostsWithUserAndComment, async (page) => {
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

    const userWithPost = postList.map(post => {
        const user = userList.find(user => user.id === post.userId);
        return { ...post, user };
    });

    const data = userWithPost.map(post => ({
        ...post,
        comments: commentList.filter(comment => comment.postId === post.id)
    }));
    return {
        data,
        page
    }
})


const getPostDetail = createAsyncThunk(keyReducer.getDetail, async (id) => {
    return await callApi({
        method: 'get',
        url: API_URL_APP.posts.postDetail(id)
    })

})

export {
    getListPosts,
    getListPostsWithUser,
    getPostDetail
}
