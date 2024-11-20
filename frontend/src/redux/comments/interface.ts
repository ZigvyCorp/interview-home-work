import { Status } from "utils"

export interface IComment {
    id?: string
    postId?: string
    name?: string
    body?: string
}

export interface ICommentState {
    status?: Status
    error?: Error
    message?: any
    comments?: IComment[]
}


