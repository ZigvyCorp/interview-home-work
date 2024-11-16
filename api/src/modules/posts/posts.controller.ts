import { Body, Controller, Delete, Get, Param, Post, Put, Query, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { FetchByIdDto } from 'src/common/dto/common.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { IRequestAuth } from '../auth/interface/auth.interface';
import { IVerifyUser } from '../user/interface/user.interface';
import { CreatePostsDto, GetAllPostsDto } from './dto/posts.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new posts (only title and content required).' })
  @Post()
  create(@Body() payload: CreatePostsDto, @Request() req: IRequestAuth<IVerifyUser>) {
    return this.postsService.createPosts({
      ...payload,
      ownerId: req.user.id,
    });
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Fetch a list of all posts' })
  @Get()
  getAllPosts(@Query() queryParams: GetAllPostsDto) {
    return this.postsService.getAllPosts(queryParams);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Fetch a single posts' })
  @Get(':id')
  getPostById(@Param() params: FetchByIdDto) {
    return this.postsService.getPostsById(params.id);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a posts, just update your posts' })
  @Put(':id')
  updatePost(
    @Param() params: FetchByIdDto,
    @Body() payload: CreatePostsDto,
    @Request() req: IRequestAuth<IVerifyUser>,
  ) {
    return this.postsService.updatePosts({
      ...payload,
      id: params.id,
      userId: req.user.id,
    });
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a posts, just delete your posts' })
  @Delete(':id')
  deletePost(@Param() params: FetchByIdDto, @Request() req: IRequestAuth<IVerifyUser>) {
    return this.postsService.deletePosts({
      id: params.id,
      userId: req.user.id,
    });
  }
}
