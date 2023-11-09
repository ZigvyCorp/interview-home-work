import { Injectable } from '@nestjs/common';
import { paginate, paginateRaw } from 'nestjs-typeorm-paginate';
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
    const created =  this.userRepository.create(data);
    return this.userRepository.save(created);
  }

  async findAll(filters: PaginateQueryDto) {
    const { keyword } = filters;
    const queryBuilder = this.userRepository.createQueryBuilder('u');
    queryBuilder.orderBy('u.id', 'DESC');

    queryBuilder.where([
      { name: ILike(`%${keyword || ''}%`) },
      { username: ILike(`%${keyword || ''}%`) },
      // { tags: ILike(`%${keyword || ''}%`) },
    ]);

    const response = await paginate<UserEntity>(queryBuilder, filters);

    return response;
  }

  async findOne(id: number): Promise<UserEntity> {
    const queryBuilder = this.userRepository.createQueryBuilder('u');
    queryBuilder.where('u.id = :id AND u.deletedAt IS NULL', {
      id,
    });
    return queryBuilder.getOne();
  }

  async findByUsername(username: string): Promise<UserEntity> {
    const queryBuilder = this.userRepository.createQueryBuilder('u');
    queryBuilder.where('u.username = :username AND u.deletedAt IS NULL', {
      username,
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
