import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './entity/comment.entity';
import { Repository } from 'typeorm';
import { IGetAllCommentByPostId } from '../posts/interface/posts.interface';
import { getQueryParamsResult } from 'src/utils/pagination.util';
import { ICreateComment, IUpdateComment } from './interface/comment.interface';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepo: Repository<CommentEntity>,
  ) {}

  private async findCommentById(id: string) {
    return this.commentRepo.findOne({
      where: {
        id,
      },
      relations: ['owner'],
      select: {
        id: true,
        content: true,
        createdAt: true,
        updatedAt: true,
        owner: {
          id: true,
          name: true,
          username: true,
          dob: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    });
  }

  private checkCommentOwnership({ ownerId, userId }) {
    if (ownerId === userId) {
      return true;
    }

    return false;
  }

  async getCommentById(id: string) {
    const data = await this.findCommentById(id);
    if (!data) {
      throw new NotFoundException('Comment not found');
    }
    return {
      data,
      message: 'success',
    };
  }

  async getAllCommentByPostsId(payload: IGetAllCommentByPostId) {
    const { page, limit, skip, take } = getQueryParamsResult({
      page: payload.page,
      limit: payload.limit,
    });
    const [data, count] = await this.commentRepo.findAndCount({
      where: {
        post: {
          id: payload.postId,
        },
      },
      relations: {
        owner: true,
      },
      select: {
        id: true,
        content: true,
        createdAt: true,
        updatedAt: true,
        owner: {
          id: true,
          name: true,
          username: true,
          dob: true,
          createdAt: true,
          updatedAt: true,
        },
      },
      take,
      skip,
      order: {
        createdAt: 'desc',
      },
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
  }

  async createComment(payload: ICreateComment) {
    const { postId, ownerId, content } = payload;
    const data = await this.commentRepo.save({
      post: {
        id: postId,
      },
      owner: {
        id: ownerId,
      },
      content,
    });
    return {
      data,
      message: 'created successfully',
    };
  }

  async updateComment(payload: IUpdateComment) {
    const { id, userId, content } = payload;
    const comment = await this.findCommentById(id);
    if (!comment) {
      throw new NotFoundException('Comment not found');
    }
    const checkOwnership = this.checkCommentOwnership({
      ownerId: comment.owner.id,
      userId,
    });
    if (!checkOwnership) {
      throw new NotFoundException('You are not the owner of this comment');
    }

    await this.commentRepo.update(id, {
      content,
    });
    return {
      message: 'updated successfully',
    };
  }

  async deleteComment({ id, userId }: { id: string; userId: string }) {
    const comment = await this.findCommentById(id);
    if (!comment) {
      throw new NotFoundException('Comment not found');
    }
    const checkOwnership = this.checkCommentOwnership({
      ownerId: comment.owner.id,
      userId,
    });
    if (!checkOwnership) {
      throw new NotFoundException('You are not the owner of this comment');
    }
    await this.commentRepo.delete(id);
    return {
      message: 'deleted successfully',
    };
  }
}
