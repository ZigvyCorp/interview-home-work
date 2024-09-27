import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '~/common/entities/post.entity';
import { CreatePostDto, PostsReqDto, UpdatePostDto } from './dto/post.dto';
import { getSkip } from '~/shared/dto';
import { UserService } from '../users/user.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    private readonly userService: UserService,
  ) {}

  async findOne(id: number) {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: ['user', 'comments', 'comments.user'],
    });

    if (!post) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    return post;
  }

  async getPosts(dto: PostsReqDto) {
    const { search, take, page } = dto;

    const builder = this.postRepository
      .createQueryBuilder('p')
      .leftJoinAndSelect('p.user', 'u')
      .leftJoinAndSelect('p.comments', 'c')
      .orderBy('c.createdAt', 'DESC')
      .leftJoinAndSelect('c.user', 'cm')
      .where('p.deletedAt is NULL');

    if (search) {
      builder.andWhere('p.title LIKE :search', {
        search: `%${search}%`,
      });
    }

    const [posts, total] = await builder
      .take(take)
      .skip(getSkip({ page, take }))
      .orderBy('p.timestamp.createdAt', 'DESC')
      .getManyAndCount();

    return { data: posts, meta: { total, take, page } };
  }

  async createPost(dto: CreatePostDto) {
    const { userId, title, body } = dto;

    const user = await this.userService.checkUserExist(userId);

    const post = new PostEntity({
      title,
      body,
      user,
    });

    return await this.postRepository.save(post);
  }

  async updatePost(id: number, dto: UpdatePostDto) {
    await this.findOne(id);

    return this.postRepository.update(id, { ...dto });
  }

  async deletePost(id: number) {
    await this.findOne(id);

    return this.postRepository.softDelete(id);
  }
}
