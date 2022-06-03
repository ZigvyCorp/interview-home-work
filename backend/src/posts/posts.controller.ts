import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { UpdateResult } from 'typeorm';
import { FindPostResponse } from './type/post.type';

@Controller('posts')
export class PostsController {
  constructor(
    private postService: PostsService,
  ){}
  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    let postCreatedResult:boolean = await this.postService.create(createPostDto);
    if (!postCreatedResult) {
      throw new HttpException(
        {
          status: HttpStatus.FAILED_DEPENDENCY,
          errorMessage: {
            dev: "can't create a post",
            user: "can't create a post",
          },
        },
        HttpStatus.FAILED_DEPENDENCY,
      );
    }
    return postCreatedResult
  }

  @Get()
  async findAll() {
    let listPost: FindPostResponse[] | null = await this.postService.findAll();
    if(!listPost) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errorMessage: {
            dev: `can't find all user data`,
            user: "not found",
          },
        },
        HttpStatus.NOT_FOUND,
      );
    }
    let listPostAfter:FindPostResponse[] = listPost.map(item => {
      let {removed, ...result} = item;
      return result
    })
    return listPostAfter
  }
  @Get(':id/comments')
  async findAllComment(@Param('id') id: number) {
    let listPostComment: FindPostResponse | null = await this.postService.findPostComment(id);
    if(!listPostComment) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errorMessage: {
            dev: `can't find all user data`,
            user: "not found",
          },
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return listPostComment
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    let post: FindPostResponse | null = await this.postService.findOne(id);
    if(!post) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          errorMessage: {
            dev: `can't find all user data`,
            user: "not found",
          },
        },
        HttpStatus.NOT_FOUND,
      );
    }
    let {removed, ...result} = post;
    return result
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePostRepository: UpdatePostDto) {
    let postUpdate:UpdateResult | boolean = await this.postService.update(id, updatePostRepository);
    if(!postUpdate) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          errorMessage: {
            dev: `can't save data to db`,
            user: "failed to update",
          },
        },
        HttpStatus.NOT_MODIFIED,
      );
    }
    return true;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    let postUpdate:UpdateResult | boolean = await this.postService.remove(id);
    if(!postUpdate) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          errorMessage: {
            dev: `can't save data to db`,
            user: "failed to update",
          },
        },
        HttpStatus.NOT_MODIFIED,
      );
    }
    return true;
  }
}
