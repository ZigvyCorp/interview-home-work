import { IUser } from "../user/model"

export interface IPost {
    userId: number
    id: number
    title: string
    body: string
    author?: IUser
}

export interface IPostComment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export interface IPayloadGetPosts {
    _limit: number
    page: number
    title?: string
}
export interface IPayloadGetPost {
    postId: string
}