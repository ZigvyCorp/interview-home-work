import { injectable } from "inversify";
import { Comment } from "../models/comment";
import { Post } from "../models/post";
import { FilterRequest } from "../models/requests/filter-request";

@injectable()
export class CommentService {
  private async _authorize(id: string, currentUser: any) {
    const comment = await Comment.findById(id);
    if (!comment) throw new Error("Comment not found");
    if (
      comment.toObject().commentedBy.toString() !== currentUser?._id.toString()
    )
      throw new Error("Forbidden");
    return comment.toObject();
  }

  async deleteComment(id: string, currentUser: any) {
    const comment = await this._authorize(id, currentUser);
    const updatedPost = await Post.findByIdAndUpdate(
      comment.post.toString(),
      {
        $pull: {
          comments: comment._id.toString(),
        },
      },
      {
        new: true,
      }
    );
    await Comment.findByIdAndDelete(id);
    return updatedPost;
  }

  async updateComment(id: string, content: string, currentUser: any) {
    await this._authorize(id, currentUser);
    const updated = await Comment.findByIdAndUpdate(
      id,
      {
        content,
      },
      {
        new: true,
      }
    ).populate("commentedBy", "-username -password");
    return updated;
  }

  async getComments(postId: string, filter = new FilterRequest()) {
    const findCondition: any = {
      post: postId,
    };
    if (filter.key) {
      findCondition.content = {
        $regex: ".*" + filter.key + ".*",
        $options: "i",
      };
    }
    const comments = await Comment.find(findCondition)
      .sort({
        createdAt: "desc",
      })
      .skip(filter.page * filter.pageSize)
      .limit(filter.pageSize)
      .populate("commentedBy", "-username -password");
    const count = await Comment.count(findCondition);
    return [comments, count];
  }

  async comment(postId: string, data: any, commentedBy: any) {
    const comment = new Comment({
      ...data,
      commentedBy: commentedBy._id,
      post: postId,
      likes: [],
    });
    await comment.save();

    const post = await Post.findByIdAndUpdate(
      postId,
      {
        $push: {
          comments: comment._id,
        },
      },
      {
        new: true,
      }
    );

    return [
      await comment
        .populate("commentedBy", "-username -password")
        .execPopulate(),
      post,
    ];
  }
}
