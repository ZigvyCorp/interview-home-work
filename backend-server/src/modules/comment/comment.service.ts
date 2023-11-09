import * as _ from 'lodash';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Comment } from '@schemas';
import { CreateCommentDto, UpdateCommentDto } from '@dto';
import { QueryOption } from '@common';

export interface CommentQueryFilter {
  ids?: any[];
  id?: string;
  postId?: string;
}

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private readonly commentModel: Model<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    return this.commentModel.create(createCommentDto);
  }

  findAll(filter: CommentQueryFilter = {}, option: QueryOption = {}) {
    const { ids, postId } = filter;
    const { fields, offset, limit } = option;

    const query = this.commentModel.find(
      _.omitBy(
        {
          _id: ids ? { $in: ids } : undefined,
          post: postId,
        },
        _.isNil,
      ),
    );
    if (fields) query.select(fields);
    if (offset) query.skip(offset);
    if (limit) query.limit(limit);
    return query.lean();
  }

  findOne(id: string) {
    return this.commentModel.findById(id).lean();
  }

  findByPost(postId: string) {
    return this.commentModel.find({ post: postId }).lean();
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    return this.commentModel
      .findByIdAndUpdate(id, updateCommentDto, { new: true })
      .lean();
  }

  remove(id: string) {
    return this.commentModel.deleteOne({ _id: id });
  }

  removeByPost(postId: string) {
    return this.commentModel.deleteMany({ post: postId });
  }
}
