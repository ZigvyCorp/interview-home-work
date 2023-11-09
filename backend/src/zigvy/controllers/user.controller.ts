import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { CreatePostDto } from '../dto/post/create-post.dto';
import { UpdatePostDto } from '../dto/post/update-post.dto';
import { PaginateQueryDto } from 'src/common/dtos/paginate.dto';

@Controller('user')
export class UserController {
  constructor(private readonly postService: PostService) { }

  @Post()
  create(@Body() createPostDto: any) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll(@Query() query: PaginateQueryDto) {
    return this.postService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }
}
