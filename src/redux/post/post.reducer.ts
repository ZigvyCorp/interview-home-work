import { PostModel } from "../../models/post"
import { PostsActions, PostType } from "./post.type"

export interface PostState {
	posts: PostModel[]
	keyword?: string
}

export const initialPostState: PostState = {
	posts: [],
	keyword: "",
}

export const postReducer = (state: PostState = initialPostState, action: PostsActions) => {
	switch (action.type) {
		case PostType.GET_POSTS_SUCCESS:
			return {
				...state,
				posts: action.payload,
			}
		case PostType.GET_COMMENTS_SUCCESS: {
			const listPosts = [
				...state.posts.filter((post) => {
					if (post.id === action.payload.postId) {
						post.comments = action.payload.comments
					}
					return post
				}),
			]
			return {
				...state,
				posts: listPosts,
			}
		}
		case PostType.SET_KEYWORD: {
			return {
				...state,
				keyword: action.payload,
			}
		}
		default:
			return {
				...state,
			}
	}
}
