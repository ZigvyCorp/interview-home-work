import { CreateCommentDto } from "../dto/create-comment.dto";
import { PaginationParams } from "../dto/pagination.dto";
import { UpdateCommentDto } from "../dto/update-comment.dto";
import { BadRequest } from "../helpers/error";
import { CommentModel } from "../models/comment.model";

export class CommentService {
  async getAllComment(postId: string, { perPage, page }: PaginationParams) {
    const condition = postId ? { post: +postId } : {};
    const skip = +perPage * +page - +perPage;

    const count = await CommentModel.countDocuments();

    const comment = await CommentModel.find(condition, { __v: 0 })
      .skip(skip)
      .limit(+perPage)
      .populate("owner");

    return { total: count, data: comment };
  }

  static async getAllCommentByPost(postId: string) {
    return await CommentModel.find({ post: +postId }, { __v: 0 }).populate(
      "owner"
    );
  }

  async createComment(payload: CreateCommentDto) {
    const id = await CommentModel.count({});

    return await CommentModel.create({
      ...payload,
      _id: id + 1,
    });
  }

  async updateComment(payload: UpdateCommentDto) {
    const comment = await CommentModel.findOne({ _id: payload.id });
    if (!comment) {
      throw new BadRequest("Comment not found");
    }

    comment.content = payload.content;
    await comment.save();

    return true;
  }

  async removeCommentById(id: string) {
    const comment = await CommentModel.findOne({ _id: +id });
    if (!comment) {
      throw new BadRequest("User not found");
    }

    await CommentModel.deleteOne({ _id: +id });
    return true;
  }
}
