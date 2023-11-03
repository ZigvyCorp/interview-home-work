import { Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostType } from 'src/posts/interfaces/post.interface';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async findAll(): Promise<PostType[]> {
    return this.postsService.findAll();
  }
}
