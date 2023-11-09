import { IMongoDbServices } from "src/core/abstract/data-services/data-mongodb-service.abstract";
import { Comment } from "src/core/schema/comment.schema";
export declare class CommentSevice {
    private readonly db;
    constructor(db: IMongoDbServices);
    getComments(): Promise<Comment[]>;
    getCommentByPostId(postId: string): Promise<Comment[]>;
}
