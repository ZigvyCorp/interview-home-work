import { ADD_COMMENT, FETCH_COMMENTS, SET_COMMENTS } from '../../constants/actionTypes'

export const doAddComment = (comment) => ({
	type: ADD_COMMENT,
	comment
})

export const doFetchComments = () => ({
	type: FETCH_COMMENTS,
})

export const doSetComments = (comments) => ({
	type: SET_COMMENTS,
	comments
})