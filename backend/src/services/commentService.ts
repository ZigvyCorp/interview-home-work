import Comment, { IComment } from "../models/commentModel";

export class CommentService {
  static async getAllComments() {
    return await Comment.find();
  }

  static async getCommentsByPostId(postId: string) {
    return await Comment.find({ post: postId });
  }

  static async createComment(commentData: IComment) {
    const comment = new Comment(commentData);
    return await comment.save();
  }

  static async updateComment(id: string, commentData: Partial<IComment>) {
    return await Comment.findByIdAndUpdate(id, commentData, { new: true });
  }

  static async deleteComment(id: string) {
    return await Comment.findByIdAndDelete(id);
  }
}
