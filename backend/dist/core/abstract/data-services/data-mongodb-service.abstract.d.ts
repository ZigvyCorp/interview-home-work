import { Comment } from 'src/core/schema/comment.schema';
import { Post } from 'src/core/schema/post.schema';
import { User } from 'src/core/schema/user.schema';
import { BaseRepository } from 'src/framework/database-mongodb/base.repository';
export declare abstract class IMongoDbServices {
    abstract userRepo: BaseRepository<User>;
    abstract commentRepo: BaseRepository<Comment>;
    abstract postRepo: BaseRepository<Post>;
}
