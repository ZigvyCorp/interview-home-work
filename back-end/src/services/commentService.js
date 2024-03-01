const { CommentModel } = require("../models");
const { APIError, STATUS_CODES, ValidationError } = require("../utils/errors/error-handler");
const PostService = require("./postService");
const UserService = require("./userService");
class CommentService {
  constructor() {
    this.userService = new UserService();
    this.postService = new PostService();
  }
  async find() {
    try {
      const existed = await CommentModel.find().populate("post").populate("owner");
      return existed;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Find Comments");
    }
  }
  async findById({ id }) {
    try {
      const existed = await CommentModel.findById({ _id: id }).populate("post").populate("owner");
      return existed;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Find Comment");
    }
  }
  async findByPostId({ id }) {
    try {
      const existed = await CommentModel.find({ post: id }).populate("owner");
      return existed;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Find Comment");
    }
  }
  async countCommentByPostId({ id }) {
    try {
      const count = await CommentModel.countDocuments({ post: id }).populate("owner");
      return count;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Find Comment");
    }
  }
  async deleteById({ id }) {
    try {
      const existed = await CommentModel.deleteOne({ _id: id });
      return existed;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Delete Comment");
    }
  }

  async create({ ownerId, postId, content }) {
    try {
      const validUser = await this.userService.findById({ id: ownerId });
      const validPost = await this.postService.findById({ id: postId });
      if (validUser && validPost) {
        const comment = new CommentModel({
          owner: ownerId,
          post: postId,
          content,
        });
        const savedComment = await comment.save();
        return savedComment;
      } else {
        throw new ValidationError("Validation Error", STATUS_CODES.NOT_FOUND, "Owner or Post is not correct");
      }
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, error);
    }
  }
  async update({ commentId, ownerId, postId, content }) {
    try {
      const updatedComment = await CommentModel.findByIdAndUpdate(
        { _id: commentId },
        { owner: ownerId, post: postId, content }
      );
      return updatedComment;
    } catch (error) {
      throw new APIError("API Error", STATUS_CODES.INTERNAL_ERROR, "Unable to Update Comment");
    }
  }
}

module.exports = CommentService;
