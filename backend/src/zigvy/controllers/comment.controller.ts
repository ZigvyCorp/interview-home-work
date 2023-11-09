import { Controller, Get, Post, Body, Patch, Param, Delete, Query, BadRequestException } from '@nestjs/common';
import { CreateCommentDto } from '../dto/comment/create-comment.dto';
import { CommentService, PostService } from '../services';
import { GetCommentsDto } from '../dto/comment/get-comments.dto';

@Controller('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService,
    private readonly postService: PostService,
  ) { }

  @Post()
  async create(@Body() body: CreateCommentDto) {
    const post = await this.postService.findOne(body.postId);
    if(!post) {
      throw new BadRequestException("Not found post");
    }
    return this.commentService.create({
      ...body,
      post,
    });
  }

  @Get()
  findAll(@Query() query: GetCommentsDto) {
    return this.commentService.findAll(query);
  }

}
