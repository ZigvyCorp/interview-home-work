import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentService } from '../services/comment.service';
import { CreateCommentDto } from '../dtos/create-blog.dto';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('comment')
export class CommentController {
    constructor(private commentService: CommentService) { }

    @ApiOperation({ summary: 'Get blog comments' })
    @ApiParam({ name: 'blogId', type: String })
    @Get('/:blogId')
    getCommentsByBlog(@Param('blogId') blogId: string) {
        return this.commentService.getCommentsByBlog(blogId)
    }

    @ApiOperation({ summary: 'Create a comment' })
    @Post()
    comment(@Body() comment: CreateCommentDto) {
        return this.commentService.createComment(comment)
    }

    @ApiOperation({ summary: 'Delete a comment' })
    @ApiParam({ name: 'commentId', type: String })
    @Delete('/:commentId')
    deleteComment(@Param('commentId') commentId: string) {

    }
}
