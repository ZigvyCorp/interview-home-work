import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Post } from '../../schemas';
import { CreatePostDto, UpdatePostDto } from '../../dto';

@Injectable()
export class PostService {
  private readonly logger = new Logger(PostService.name);

  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    const createdPost = this.postModel.create(createPostDto);
    return createdPost;
  }

  async exist(id: string) {
    const count = await this.postModel.countDocuments({ _id: id });
    this.logger.log('count', { count });
    return false;
  }

  findAll() {
    return this.postModel.find().lean().exec();
  }

  findOne(id: number) {
    return this.postModel.findById(id).lean().exec();
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
