import { ICommentState } from "./comments/interface"
import { IPostState } from "./posts/interface"

export interface RootState {
    posts: IPostState,
    comments: ICommentState
}
