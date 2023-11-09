import { IMongoDbServices } from 'src/core/abstract/data-services/data-mongodb-service.abstract';
import { BaseRepository } from './base.repository';
import { Model } from 'mongoose';
import { User } from 'src/core/schema/user.schema';
import { Post } from 'src/core/schema/post.schema';
import { Comment } from 'src/core/schema/comment.schema';
export declare class MongoDbServices implements IMongoDbServices {
    private user;
    private post;
    private comment;
    userRepo: BaseRepository<User>;
    postRepo: BaseRepository<Post>;
    commentRepo: BaseRepository<Comment>;
    constructor(user: Model<User>, post: Model<Post>, comment: Model<Comment>);
}
