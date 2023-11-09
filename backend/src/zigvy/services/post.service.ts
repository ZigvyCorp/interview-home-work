import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/post/create-post.dto';
import { UpdatePostDto } from '../dto/post/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';
import { PaginateQueryDto } from 'src/common/dtos/paginate.dto';
import { paginate, paginateRaw } from 'nestjs-typeorm-paginate';
import { CommentEntity, UserEntity } from '../entities';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>
  ) { }

  async create(data: Partial<PostEntity>): Promise<PostEntity> {
    const created = await this.postRepository.save(data);
    return created;
  }

  async findAll(filters: PaginateQueryDto) {
    const { keyword } = filters;
    const queryBuilder = this.postRepository.createQueryBuilder('u');
    queryBuilder.orderBy('u.id', 'DESC');

    queryBuilder.where([
      { title: ILike(`%${keyword || ''}%`) },
      { content: ILike(`%${keyword || ''}%`) },
      // { tags: ILike(`%${keyword || ''}%`) },
    ]);

    queryBuilder.leftJoinAndMapOne('u.owner', UserEntity, 'user', 'u.owner = user.id');
    queryBuilder.loadRelationCountAndMap('u.comments', 'u.comments');

    const response = await paginate<PostEntity>(queryBuilder, filters);

    return response;
  }

  async findOne(id: number): Promise<PostEntity> {
    const queryBuilder = this.postRepository.createQueryBuilder('u');
    queryBuilder.where([
      { id },
    ]);
    queryBuilder.loadRelationCountAndMap('u.comments', 'u.comments');
    return queryBuilder.getOne();
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
