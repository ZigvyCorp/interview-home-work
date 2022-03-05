import { CommentModel } from "../../models/comment"
import { PostModel } from "./../../models/post"
export enum PostType {
	GET_POSTS = "GET_POSTS",
	GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",

	GET_COMMENTS = "GET_COMMENTS",
	GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS",

	SET_KEYWORD = "SET_KEYWORD",
}

/**
 * get posts
 */

export type PostsRequest = {
	type: typeof PostType.GET_POSTS
}

export type PostsSuccess = {
	type: typeof PostType.GET_POSTS_SUCCESS
	payload: PostModel[]
}

/**
 * get comments
 */

export type CommentsRequest = {
	type: typeof PostType.GET_COMMENTS
	payload: number
}

export type CommentsSuccess = {
	type: typeof PostType.GET_COMMENTS_SUCCESS
	payload: { postId: number; comments: CommentModel[] }
}

/**
 * set keyword
 */

export type SetKeyword = {
	type: typeof PostType.SET_KEYWORD
	payload: string
}

export type PostsActions = PostsSuccess | CommentsSuccess | SetKeyword
