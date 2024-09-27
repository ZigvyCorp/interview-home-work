import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from '~/common/entities/comment.entity';
import {
  CreateCommentDto,
  UpdateCommentDto,
  CommentsReqDto,
} from './dto/comment.dto';
import { getSkip } from '~/shared/dto';
import { UserService } from '../users/user.service';
import { PostService } from '../posts/post.service';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
    private readonly userService: UserService,
    private readonly postService: PostService,
  ) {}

  async findOne(id: number) {
    const comment = await this.commentRepository.findOne({
      where: { id },
      relations: ['user', 'post'],
    });

    if (!comment) {
      throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
    }

    return comment;
  }

  async getComments(dto: CommentsReqDto) {
    const { search, take, page } = dto;

    const builder = this.commentRepository
      .createQueryBuilder('c')
      .where('c.deletedAt is NULL');

    if (search) {
      builder.andWhere('c.title LIKE :search', {
        search: `%${search}%`,
      });
    }

    const [comments, total] = await builder
      .take(take)
      .skip(getSkip({ page, take }))
      .orderBy('c.timestamp.createdAt', 'DESC')
      .getManyAndCount();

    return { data: comments, meta: { total, take, page } };
  }

  async createComment(dto: CreateCommentDto) {
    const { userId, postId, body, type } = dto;

    const user = await this.userService.checkUserExist(userId);

    const post = await this.postService.findOne(postId);

    const comment = new CommentEntity({
      body,
      type,
      user,
      post,
    });

    return await this.commentRepository.save(comment);
  }

  async updateComment(id: number, dto: UpdateCommentDto) {
    await this.findOne(id);

    return this.commentRepository.update(id, { ...dto });
  }

  async deleteComment(id: number) {
    await this.findOne(id);

    return this.commentRepository.softDelete(id);
  }
}
