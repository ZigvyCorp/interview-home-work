import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { PostsEntity } from './entity/posts.entity';
import { ICreatePosts, IGetAllCommentByPostId, IUpdatePosts } from './interface/posts.interface';
import { IQueryParams } from 'src/common/interface/common.interface';
import { getQueryParamsResult } from 'src/utils/pagination.util';
import { CommentService } from '../comment/comment.service';
import { ICreateComment } from '../comment/interface/comment.interface';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsEntity)
    private readonly postRepo: Repository<PostsEntity>,
    private readonly commentService: CommentService,
  ) {}

  private async findPostById(id: string) {
    return this.postRepo.findOne({
      where: {
        id,
      },
      relations: ['owner'],
    });
  }

  async createPosts(payload: ICreatePosts) {
    try {
      const data = await this.postRepo.save({
        title: payload.title,
        content: payload.content,
        tags: payload.tags,
        owner: {
          id: payload.ownerId,
        },
      });
      return {
        data,
        message: 'created successfully',
      };
    } catch (error) {
      throw error;
    }
  }

  async getAllPosts(queryParams: IQueryParams) {
    try {
      const { skip, take, limit, page, search } = getQueryParamsResult(queryParams);
      const [data, count] = await this.postRepo.findAndCount({
        where: {
          ...(search
            ? {
                title: ILike(`%${search}%`),
              }
            : {}),
        },
        order: {
          createdAt: 'desc',
        },
        skip,
        take,
      });
      return {
        data,
        meta: {
          page,
          limit,
          total: count,
        },
        message: 'success',
      };
    } catch (error) {
      throw error;
    }
  }

  async getPostsById(id: string) {
    try {
      const data = await this.findPostById(id);
      if (!data) {
        throw new NotFoundException('Post not found');
      }
      return {
        data,
        message: 'success',
      };
    } catch (error) {
      throw error;
    }
  }

  async checkPostsOwnership({ ownerId, userId }: { ownerId: string; userId: string }) {
    if (userId === ownerId) {
      return true;
    }
    return false;
  }

  async updatePosts(payload: IUpdatePosts) {
    try {
      const post = await this.findPostById(payload.id);
      if (!post) {
        throw new NotFoundException('Post not found');
      }
      const checkOwnership = await this.checkPostsOwnership({
        userId: payload.userId,
        ownerId: post.owner.id,
      });
      if (!checkOwnership) {
        throw new UnauthorizedException('You are not the owner of this post');
      }
      await this.postRepo.update(
        {
          id: payload.id,
        },
        {
          content: payload.content,
          title: payload.title,
          tags: payload.tags,
        },
      );
      return {
        message: 'updated successfully',
      };
    } catch (error) {
      throw error;
    }
  }

  async deletePosts({ id, userId }: { id: string; userId: string }) {
    try {
      const post = await this.findPostById(id);
      if (!post) {
        throw new NotFoundException('Post not found');
      }
      const checkOwnership = await this.checkPostsOwnership({
        userId,
        ownerId: post.owner.id,
      });
      if (!checkOwnership) {
        throw new UnauthorizedException('You are not the owner of this post');
      }
      await this.postRepo.delete({
        id,
      });
      return {
        message: 'deleted successfully',
      };
    } catch (error) {
      throw error;
    }
  }

  async getAllCommentByPostsId(payload: IGetAllCommentByPostId) {
    const { postId, page, limit } = payload;
    const { data, meta } = await this.commentService.getAllCommentByPostsId({
      postId,
      page,
      limit,
    });
    return {
      data,
      meta: {
        page: meta.page,
        limit: meta.limit,
        total: meta.total,
      },
      message: 'success',
    };
  }

  async createCommentToPosts(payload: ICreateComment) {
    const { postId, ownerId, content } = payload;
    return this.commentService.createComment({ postId, ownerId, content });
  }
}
