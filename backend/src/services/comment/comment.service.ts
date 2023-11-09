import { Injectable } from "@nestjs/common";
import { IMongoDbServices } from "src/core/abstract/data-services/data-mongodb-service.abstract";
import { CreateCommentDto } from "src/core/dto/comment.dto";
import { IComment } from "src/core/interface/comment.interface";
import { Comment } from "src/core/schema/comment.schema";

@Injectable()
export class CommentSevice {
  constructor(private readonly db: IMongoDbServices) {}

  async getComments(): Promise<Comment[]> {
    return await this.db.commentRepo.findAll();
  }

  async getCommentByPostId(postId: string): Promise<Comment[]> {
    return await this.db.commentRepo.getByCondition({ postId });
  }
}
