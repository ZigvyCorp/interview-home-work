import { Injectable } from '@nestjs/common';
import { paginateRaw } from 'nestjs-typeorm-paginate';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';

import { PaginateQueryDto } from './../../common/dtos/paginate.dto';
import { UpdatePostDto } from '../dto/post/update-post.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) { }

  async create(data: Partial<UserEntity>): Promise<UserEntity> {
    const created = await this.userRepository.save(data);
    return created;
  }

  async findAll(filters: PaginateQueryDto) {
    const { keyword } = filters;
    const queryBuilder = this.userRepository.createQueryBuilder('u');
    queryBuilder.orderBy('u.id', 'DESC');

    queryBuilder.where([
      { title: ILike(`%${keyword || ''}%`) },
      { content: ILike(`%${keyword || ''}%`) },
      // { tags: ILike(`%${keyword || ''}%`) },
    ]);

    const response = await paginateRaw<UserEntity>(queryBuilder, filters);

    return response;
  }

  async findOne(id: number): Promise<UserEntity> {
    const queryBuilder = this.userRepository.createQueryBuilder('u');
    queryBuilder.where('u.id = :id AND u.deletedAt IS NULL', {
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
