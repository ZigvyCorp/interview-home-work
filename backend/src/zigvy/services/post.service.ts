import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';
import { PaginateQueryDto } from 'src/common/dtos/paginate.dto';
import { paginateRaw } from 'nestjs-typeorm-paginate';

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

    queryBuilder.where([{ type: ILike(`%${keyword || ''}%`) }, { name: ILike(`%${keyword || ''}%`) }]);

    const response = await paginateRaw<PostEntity>(queryBuilder, filters);

    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
