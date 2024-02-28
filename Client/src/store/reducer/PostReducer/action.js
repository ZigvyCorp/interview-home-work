import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from 'src/services/auth/apis.js';
import { API_URL_APP } from 'src/apis/index.js';
import { apiPost } from 'src/apis/post.js';
import { createAction } from '@reduxjs/toolkit/src';

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
    const postDetail = await callApi({
        method: 'get',
        url: API_URL_APP.posts.postDetail(id)
    })
    const userList = await callApi({
        method: 'get',
        url: API_URL_APP.users.userList
    })
    const commentList = await callApi({
        method: 'get',
        url: API_URL_APP.posts.postCommentDetail(id)
    })
    return (
        {
            ...postDetail,
            user: userList.filter(x => x.id === postDetail.id)[0],
            comments: commentList.filter(x => x.postId === postDetail.id)
        }
    )

})

export {
    getListPosts,
    getListPostsWithUser,
    getPostDetail
}
