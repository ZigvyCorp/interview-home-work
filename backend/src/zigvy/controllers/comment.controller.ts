import { Controller, Get, Post, Body, Patch, Param, Delete, Query, BadRequestException } from '@nestjs/common';
import { CreateCommentDto } from '../dto/comment/create-comment.dto';
import { CommentService, PostService, UserService } from '../services';
import { GetCommentsDto } from '../dto/comment/get-comments.dto';

@Controller('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService,
    private readonly userService: UserService,
    private readonly postService: PostService,
  ) { }

  @Post()
  async create(@Body() body: CreateCommentDto) {
    // TODO: Please check authen to get user'session 
    const [ post, user] = await Promise.all([
      this.postService.findOne(body.postId),
      this.userService.findOne(body.postId),
    ])
    if(!post) {
      throw new BadRequestException("Not found post");
    }
    if(!user) {
      throw new BadRequestException("Not found user");
    }
    return this.commentService.create({
      ...body,
      post,
      owner: user
    });
  }

  @Get()
  findAll(@Query() query: GetCommentsDto) {
    return this.commentService.findAll(query);
  }

}
