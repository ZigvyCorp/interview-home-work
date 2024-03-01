const { PostModel, CommentModel } = require("../models");
const { APIError, STATUS_CODES } = require("../utils/errors/error-handler");
const CommentService = require("./commentService");
const UserService = require("./userService");
class PostService {
  constructor() {
    this.userService = new UserService();
  }
  async find({ page = 1, limit = 10 }) {
    try {
      const skip = (page - 1) * limit;
      const posts = await PostModel.find().populate("owner").skip(skip).limit(limit);

      const postsWithCommentsCount = await Promise.all(
        posts.map(async (post) => {
          const commentCount = await this.getCommentCountByPostId(post._id);
          return { ...post.toObject(), commentCount };
        })
      );
      return postsWithCommentsCount;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Find Posts");
    }
  }

  async getCommentCountByPostId(postId) {
    try {
      const commentCount = await CommentModel.countDocuments({ post: postId });
      return commentCount;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Get Comment Count");
    }
  }
  async findById({ id }) {
    try {
      const [post, commentCount] = await Promise.all([
        PostModel.findById({ _id: id }).populate("owner"),
        CommentModel.countDocuments({ post: id }),
      ]);

      if (!post) {
        throw new Error("Post not found");
      }

      return {
        ...post.toObject(),
        commentCount: commentCount,
      };
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Find Post");
    }
  }
  async findByPostTitle({ query }) {
    try {
      const regex = new RegExp(query, "i");
      const posts = await PostModel.find({ title: { $regex: regex } });
      const postsWithCommentsCount = await Promise.all(
        posts.map(async (post) => {
          const commentCount = await this.getCommentCountByPostId(post._id);
          return { ...post.toObject(), commentCount };
        })
      );
      return postsWithCommentsCount;
      
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Search Post");
    }
  }
  async deleteById({ id }) {
    try {
      const existed = await PostModel.deleteOne({ _id: id });
      return existed;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Delete Post");
    }
  }

  async create({ ownerId, title, content, tags }) {
    try {
      const validOwner = await this.userService.findById({ id: ownerId });
      if (validOwner) {
        const post = new PostModel({
          owner: validOwner,
          title,
          content,
          tags,
        });
        const savedPost = await post.save();
        return savedPost;
      } else {
        throw new APIError("API Not Found", STATUS_CODES.NOT_FOUND, "User not valid");
      }
    } catch (error) {
      console.log(error);
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Create Post");
    }
  }
  async update({ postId, ownerId, title, content, tags }) {
    try {
      const updatedPost = await PostModel.findByIdAndUpdate(
        { _id: postId },
        {
          owner: ownerId,
          title,
          content,
          tags,
        }
      );
      return updatedPost;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Update Post");
    }
  }
}

module.exports = PostService;
