import { Controller, Get, Param, Query } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async getListCommentByPostId(@Query('postId') postId: number) {
    return await this.commentService.getListCommentByPostId(postId);
  }
}
