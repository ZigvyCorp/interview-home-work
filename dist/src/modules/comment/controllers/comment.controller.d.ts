import { CommentService } from '../services/comment.service';
import { CreateCommentDto } from '../dtos/create-blog.dto';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    getCommentsByBlog(blogId: string): Promise<import("../entities/comment.entity").CommentEntity[]>;
    comment(comment: CreateCommentDto): Promise<import("../entities/comment.entity").CommentEntity>;
    deleteComment(commentId: string): void;
}
