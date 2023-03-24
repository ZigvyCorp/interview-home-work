import { Post } from "../models/posts.js";
import { Comment } from "../models/comments.js";

class CommentController {
  //Create comment
  //body:{postId,UserId,email,body}
  async create(req, res) {
    const { postId } = req.body;
    const newComment = new comment(req.body);
    try {
      await Post.findOneAndUpdate(
        { _id: postId },
        { $push: { comment: newComment._id } }
      );
      const savedComment = await newComment.save();
      res.status(200).json(savedComment);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //Update post
  async update(req, res) {
    try {
      const comment = await Comment.findById(req.params.id);
      await comment.updateOne({ $set: req.body });
      res.status(200).json("The comment has been update");
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //Delete and then deleting commentId in Post
  async delete(req, res) {
    try {
      const comment = await Comment.findById(req.params.id);

      const post = await Post.findById(comment.postId);
      post.comment = post.comment.filter(
        (c) => c.toString() !== req.params.id.toString()
      );
      await post.save();
      await comment.deleteOne();
      // await post.findOneAndDelete({ comment: req.params.id });
      res.status(200).json("The comment has been delete");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export var commentController = new CommentController();
