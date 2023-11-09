import { Injectable } from '@nestjs/common';
import { IMongoDbServices } from 'src/core/abstract/data-services/data-mongodb-service.abstract';
import { BaseRepository } from './base.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schema/user.schema';
import { Post } from 'src/core/schema/post.schema';
import { Comment } from 'src/core/schema/comment.schema';

@Injectable()
export class MongoDbServices implements IMongoDbServices {
  userRepo: BaseRepository<User>;

  postRepo: BaseRepository<Post>;

  commentRepo: BaseRepository<Comment>;

  constructor(
    @InjectModel('users')
    private user: Model<User>,
    @InjectModel('posts')
    private post: Model<Post>,
    @InjectModel('comments')
    private comment: Model<Comment>,
  ) {
    this.userRepo = new BaseRepository<User>(this.user);

    this.postRepo = new BaseRepository<Post>(this.post);

    this.commentRepo = new BaseRepository<Comment>(this.comment);
  }
}
