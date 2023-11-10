import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { CommentService } from './comment.service';
import { PostService } from '../post/post.service';
import { CreateCommentDto, UpdateCommentDto } from '@dto';

@Controller('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService,
    private readonly postService: PostService,
  ) {}

  @Post()
  async create(@Body() createCommentDto: CreateCommentDto) {
    const postFilter = { _id: createCommentDto.post };
    const numberOfPost = await this.postService.count(postFilter);
    if (numberOfPost === 0)
      throw new HttpException('Post Not Found', HttpStatus.NOT_FOUND);
    const comment = await this.commentService.create(createCommentDto);
    await this.postService.update(createCommentDto.post, {
      comments: [comment._id.toString()],
    });
    return comment;
  }

  @Get()
  async findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.commentService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentService.update(id, updateCommentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const { deletedCount } = await this.commentService.remove(id);
    if (deletedCount === 0)
      throw new HttpException('Comment Not Found', HttpStatus.NOT_FOUND);
    return;
  }
}
