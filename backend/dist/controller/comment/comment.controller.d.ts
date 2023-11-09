import { IComment } from "src/core/interface/comment.interface";
import { CommentSevice } from "src/services/comment/comment.service";
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentSevice);
    getComments(): Promise<IComment[]>;
    getCommentByPostId(post: string): Promise<IComment[]>;
}
