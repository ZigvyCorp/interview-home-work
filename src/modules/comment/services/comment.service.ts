import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from '../dtos/create-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from '../entities/comment.entity';
import { Repository } from 'typeorm';
import { BlogService } from 'src/modules/blog/services/blog.service';

@Injectable()
export class CommentService {
    constructor(@InjectRepository(CommentEntity) private commentRepository: Repository<CommentEntity>, private blogService: BlogService) { }
    async createComment(comment: CreateCommentDto) {
        try {
            const blog = await this.blogService.getBlog(comment.blog);
            const newComment = new CommentEntity();
            newComment.author = comment.author;
            newComment.content = comment.content;
            newComment.blog = blog;

            return this.commentRepository.save(newComment);
        } catch (error) {
            throw error;
        }

    }

    async getCommentsByBlog(blogId: string) {
        try {
            return (await this.commentRepository.find({ where: { blog: { id: blogId } }, order: { createdAt: 'DESC' } }))

        } catch (error) {
            throw error;
        }
    }

    async removeComment(commentId: string) {
        try {
            const deleteResult = await this.commentRepository.delete({ id: commentId })
            return deleteResult.affected === 1;
        } catch (error) {
            throw error;
        }
    }
}
