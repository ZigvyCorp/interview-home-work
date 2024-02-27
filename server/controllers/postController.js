const Post = require("../model/posts");
const Comment = require("../model/comments");
const User = require("../model/users");
const jsonTemplate = require("../lib/lib");


async function  countComments(posts) {
  const postWithCommentCount = await Promise.all(
    posts.map(async (post) => {
      const countComment = await Comment.countDocuments({
        postId: post._id,
      });
      const user = await User.findById(post.userId);
      return {
        ...post.toObject(),
        countComment,
        user: user?.name,
      };
    })
  );

  return postWithCommentCount;
}
class postController {

 
  async get(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1;
      const pageSize = 5;
      const skip = (page - 1) * pageSize;

      const posts = await Post.find().skip(skip).limit(pageSize);
      const postWithCommentCount = await countComments(posts);
      res
        .status(200)
        .json(jsonTemplate.jsonValue(200, postWithCommentCount, ""));
    } catch (error) {
      res.status(400).json(jsonTemplate.jsonValue(400, null, error.message));
    }
  }

  async getPostByID(req, res, next) {
    try {
      const post = await Post.findById(req.params.id);
      const postWithUserInfo = await User.findById(post.userId);
      const comments = await Comment.find({ postId: post._id });
      const commentData = await Promise.all(
        comments.map(async (comment) => {
          const user = await User.findById(comment.userId);
          return { body: comment.body, name: user.name };
        })
      );
      const result = {
        post: { ...post.toObject(), user: postWithUserInfo.name },
        comment: commentData,
      };
      res.status(200).json(jsonTemplate.jsonValue(200, result, ""));
    } catch (error) {
      res.status(404).json(jsonTemplate.jsonValue(400, null, error));
    }
  }

  async searchPosts(req, res, next) {
    try {
      const searchTerm = req.query.title;
      // console.log("searchTerm", searchTerm)
      const posts = await Post.find({
        title: { $regex: searchTerm, $options: "i" },
      });

      const postWithCountComment = await countComments(posts)

      res.status(200).json(jsonTemplate.jsonValue(200, postWithCountComment, ""));
    } catch (error) {
      console.log("asdasd")
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new postController();
