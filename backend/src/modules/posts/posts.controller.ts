import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostForm } from './dtos/create-post.form';
import { UpdatePostForm } from './dtos/update-post.form';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createPostDto: CreatePostForm) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.postsService.getAll(page, limit);
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.findById(id);
  }

  @Get(':id/comments')
  findCommentsByPost(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.findCommentsByPost(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostForm: UpdatePostForm,
  ) {
    return this.postsService.update(id, updatePostForm);
  }
}
