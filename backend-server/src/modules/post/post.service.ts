import * as _ from 'lodash';
import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Post } from '@schemas';
import { CreatePostDto, UpdatePostDto } from '@dto';
import { QueryOption } from '@common';

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

  findAll(option: QueryOption = {}) {
    const query = this.postModel.find();
    const { fields, offset, limit } = option;
    if (fields) query.select(fields);
    if (offset) query.skip(offset);
    if (limit) query.limit(limit);
    return query.lean();
  }

  findOne(id: string, option: QueryOption = {}) {
    const query = this.postModel.findById(id);
    const { fields } = option;
    if (fields) query.select(fields);
    return query.lean();
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    const { comments } = updatePostDto;
    delete updatePostDto.comments;
    return this.postModel
      .findByIdAndUpdate(
        id,
        _.omitBy(
          {
            ...updatePostDto,
            $push: !_.isEmpty(comments)
              ? { comments: { $each: comments } }
              : undefined,
          },
          _.isNil,
        ),
        { new: true },
      )
      .lean();
  }

  remove(id: string) {
    return this.postModel.deleteOne({ _id: id });
  }
}
