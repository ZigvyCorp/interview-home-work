import { Controller, Get, Post, Body, Patch, Param, Delete, Query, BadRequestException } from '@nestjs/common';
import { CreatePostDto } from '../dto/post/create-post.dto';
import { UpdatePostDto } from '../dto/post/update-post.dto';
import { PaginateQueryDto } from 'src/common/dtos/paginate.dto';
import { PostService, UserService } from '../services';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,

  ) { }

  @Post()
  async create(@Body() body: CreatePostDto) {
    const owner = await this.userService.findOne(body.ownerId);
    if(!owner) {
      throw new BadRequestException("Not found user");
    }
    return this.postService.create({
      ...body,
      owner: owner.id,
    } as any);
  }

  @Get()
  findAll(@Query() query: PaginateQueryDto) {
    return this.postService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
