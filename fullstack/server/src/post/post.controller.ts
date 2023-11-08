import { Controller, Body, Query, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto';

@Controller('post')
export class PostController {
  constructor (private readonly postService: PostService) { }

  @Get()
  getAll() {
    return this.postService.getAll();
  }

  @Get("title?")
  getPostByTitle(@Query("title") title: string) { }

  @Get(":id")
  getPostById(@Param("id") id: number) {
    return this.postService.getPostById(id);
  }

  @Post("/create")
  createPost(@Body("data") dto: CreatePostDto) { }

  @Put(":id")
  updatePost(@Param("id") id: number, @Body("data") dto: UpdatePostDto) { }

  @Delete(":id")
  deletePost(@Param("id") id: number) {

  }

}
