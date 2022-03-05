import { CommentModel } from "./comment"

export interface PostModel {
	userId?: number
	id: number
	name: string
	title: string
	body: string
	createdAt?: Date | string
	comments?: CommentModel[]
}

export const initPost: PostModel = {
	userId: 0,
	id: 0,
	name: "",
	title: "",
	body: "",
}
