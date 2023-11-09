import { Injectable } from '@nestjs/common';
import { paginate } from 'nestjs-typeorm-paginate';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';

import { UpdatePostDto } from '../dto/post/update-post.dto';
import { CommentEntity, UserEntity } from '../entities';
import { GetCommentsDto } from '../dto/comment/get-comments.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>
  ) { }

  async initialData(): Promise<any> {

  }

  async create(data: Partial<CommentEntity>): Promise<CommentEntity> {
    const created = await this.commentRepository.save(data);
    return created;
  }

  async findAll(filters: GetCommentsDto) {
    const { keyword, postId } = filters;
    const queryBuilder = this.commentRepository.createQueryBuilder('u');
    queryBuilder.orderBy('u.id', 'DESC');

    queryBuilder.where([
      { content: ILike(`%${keyword || ''}%`) },
    ]);
    if (postId) {
      queryBuilder.where('u.post = :postId', { postId });
    }
    queryBuilder.leftJoinAndMapOne('u.owner', UserEntity, 'user', 'u.owner = user.id');

    const response = await paginate<CommentEntity>(queryBuilder, filters);
    return response;
  }

  async findOne(id: number): Promise<CommentEntity> {
    const queryBuilder = this.commentRepository.createQueryBuilder('u');
    queryBuilder.where('u.id = :id AND u.deletedAt IS NOT NULL', {
      id,
    });
    return queryBuilder.getOne();
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
