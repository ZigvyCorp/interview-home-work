import * as _ from 'lodash';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from '@dto';
import { LIMIT_POST_PER_REQUEST } from '@common';
import { UserService } from '../user/user.service';
import { CommentService } from '../comment/comment.service';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
    private readonly commentService: CommentService,
  ) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    createPostDto.overview = createPostDto.content.substring(0, 100);
    return this.postService.create(createPostDto);
  }

  @Get()
  async findAll(
    @Query('page') page: string = '1',
    @Query('search') keyword: string = '',
  ) {
    const limit = LIMIT_POST_PER_REQUEST;
    const offset = (Number(page) - 1) * limit;
    const fields = 'title author overview';
    const posts = await this.postService.findAll(
      { keyword },
      { fields, offset, limit },
    );
    const users = await this.userService.findAll(
      { ids: _.map(posts, 'author') },
      { fields: 'firstName lastName username photo' },
    );
    const mapUser = _.reduce(
      users,
      (result, user) => {
        result[user._id.toString()] = user;
        return result;
      },
      {},
    );
    return posts.map((post) => ({
      ...post,
      author: mapUser[post.author.toString()] || null,
    }));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const fields = 'title author content';
    const post = await this.postService.findOne(id, { fields });
    if (!post) throw new HttpException('Post Not Found', HttpStatus.NOT_FOUND);
    const user = await this.userService.findOne(
      { id: post.author.toString() },
      { fields: 'firstName lastName username photo' },
    );
    post.author = user;
    return post;
  }

  @Get(':id/comments')
  async getComments(@Param('id') id: string) {
    const fields = 'content user';
    const post = await this.postService.findOne(id, { fields: 'comments' });
    if (!post) throw new HttpException('Invalid post', HttpStatus.NOT_FOUND);

    const comments = await this.commentService.findAll(
      // { postId: id },
      { ids: post.comments },
      { fields },
    );
    const users = await this.userService.findAll(
      { ids: _.map(comments, 'user') },
      { fields: 'firstName lastName username photo' },
    );
    const mapUser = _.reduce(
      users,
      (result, user) => {
        result[user._id.toString()] = user;
        return result;
      },
      {},
    );
    return comments.map((comment) => ({
      ...comment,
      user: mapUser[comment.user.toString()] || null,
    }));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    updatePostDto.overview = updatePostDto.content.substring(0, 100);
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const { deletedCount } = await this.postService.remove(id);
    if (deletedCount === 0)
      throw new HttpException('Post Not Found', HttpStatus.NOT_FOUND);
    return;
  }
}
