const Comment = require("../models/Comment");
const Post = require("../models/Post");

const commentController = {
  //ADD COMMENT
  addComment: async (req, res) => {
    try {
      const { user, post, content } = req.body;
      const existPost = await Post.findById(post);
      if (!existPost) {
        return res.status(404).json({ message: `Post ID: ${post} not found` });
      }
      const comment = new Comment({
        user: user,
        post: post,
        content: content,
      });
      const savedComment = await comment.save();
      existPost.comments.push(savedComment._id);
      await existPost.save();
      res.status(200).json(savedComment);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  },

   //GET COMMENT BY POST ID
  getCommentsByPostId: async (req, res) => {
    try {
      const postId = req.query.postId;
      console.log(postId);
      const comments = await Comment.find({ post: postId });
      res.status(200).json(comments);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  },
};
module.exports = commentController;
