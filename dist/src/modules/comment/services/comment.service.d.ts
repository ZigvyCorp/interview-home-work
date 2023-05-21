import { CreateCommentDto } from '../dtos/create-blog.dto';
import { CommentEntity } from '../entities/comment.entity';
import { Repository } from 'typeorm';
import { BlogService } from 'src/modules/blog/services/blog.service';
export declare class CommentService {
    private commentRepository;
    private blogService;
    constructor(commentRepository: Repository<CommentEntity>, blogService: BlogService);
    createComment(comment: CreateCommentDto): Promise<CommentEntity>;
    getCommentsByBlog(blogId: string): Promise<CommentEntity[]>;
    removeComment(commentId: string): Promise<boolean>;
}
