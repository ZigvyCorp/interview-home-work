import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Post } from '@schemas';
import { CreatePostDto, UpdatePostDto } from '@dto';

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

  count(filter: object) {
    return this.postModel.countDocuments(filter).lean();
  }

  findAll() {
    return this.postModel.find().lean();
  }

  findOne(id: string) {
    return this.postModel.findById(id).lean();
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.postModel
      .findByIdAndUpdate(id, updatePostDto, { new: true })
      .lean();
  }

  remove(id: string) {
    return this.postModel.deleteOne({ _id: id });
  }
}
