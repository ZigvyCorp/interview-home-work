import { I_Post } from "./postInterface";
import { I_User } from "./userInterface";

export interface I_Comment {
    _id: string,
    userId: I_User,
    postId: I_Post,
    content: string,
    createdAt: string,
    updatedAt: string
}