import { Status } from "utils"

export interface IPost {
    id?: string
    title?: string
    content?: string
    body?: string
    userId?: any
    tags?: []
    createdAt?: string
}

export interface IPostState {
    status?: Status
    error?: Error
    message?: any
    posts?: IPost[]
}

export interface ITag {
    name?: string
}

