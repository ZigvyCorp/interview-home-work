import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Get } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, PostsReqDto, UpdatePostDto } from './dto/post.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('posts')
@UsePipes(new ValidationPipe({ transform: true }))
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPosts(@Query() dto: PostsReqDto) {
    return await this.postService.getPosts(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.postService.findOne(id);
  }

  @Post()
  async createPost(@Body() dto: CreatePostDto) {
    return await this.postService.createPost(dto);
  }

  @Patch(':id')
  async updatePost(@Param('id') id: number, @Body() dto: UpdatePostDto) {
    return await this.postService.updatePost(id, dto);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: number) {
    return await this.postService.deletePost(id);
  }
}
