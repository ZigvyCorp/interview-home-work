import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Comment } from '@schemas';
import { CreateCommentDto, UpdateCommentDto } from '@dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private readonly commentModel: Model<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    return this.commentModel.create(createCommentDto);
  }

  findAll() {
    return this.commentModel.find().lean();
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
