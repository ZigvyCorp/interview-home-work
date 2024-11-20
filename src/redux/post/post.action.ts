import { CommentModel } from "../../models/comment"
import { PostModel } from "../../models/post"
import { CommentsRequest, CommentsSuccess, PostsRequest, PostsSuccess, PostType, SetKeyword } from "./post.type"
/**
 * Get posts
 */
export const getPostAction = (): PostsRequest => ({
	type: PostType.GET_POSTS,
})

export const getPostsSuccessAction = (posts: PostModel[]): PostsSuccess => ({
	type: PostType.GET_POSTS_SUCCESS,
	payload: posts,
})

/**
 * get comments
 */

export const getCommentsAction = (postId: number): CommentsRequest => ({
	type: PostType.GET_COMMENTS,
	payload: postId,
})

export const getCommentsSuccessAction = (postId: number, comments: CommentModel[]): CommentsSuccess => ({
	type: PostType.GET_COMMENTS_SUCCESS,
	payload: { postId, comments },
})

/**
 * set keyword
 */

export const setKeywordAction = (keyword: string): SetKeyword => ({
	type: PostType.SET_KEYWORD,
	payload: keyword,
})
