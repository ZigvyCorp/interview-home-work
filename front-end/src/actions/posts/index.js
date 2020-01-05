import { ADD_POST, FETCH_POSTS, SET_POSTS } from '../../constants/actionTypes'

export const doAddPost = (post) => ({
	type: ADD_POST,
	post,
})

export const doFetchPosts = () => ({
	type: FETCH_POSTS,	
})

export const doSetPosts = (posts) => ({
	type: SET_POSTS,
	posts,
})

