import { I_Comment } from "./commentInterface"
import { I_User } from "./userInterface"

export interface I_Post {
    content: string,
    title: string,
    _id: string,
    tags: string[],
    userId: I_User,
    comments: I_Comment[]
    createdAt: string,
    updatedAt: string
}