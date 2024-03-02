'use strict';

const { BadRequestError } = require('../helpers/error-response');
const commentModel = require('../models/comment.model');
const { findCommentById } = require('../models/repositories/comment');
const { findPostById } = require('../models/repositories/post');

class CommentService {
  static createComment = async (payload) => {
    const { postId, id, name, email, body, parentId } = payload;
    let right;
    if (parentId) {
      const foundParent = await findCommentById(parentId);
      if (!foundParent) throw new NotFoundError('Parent comment not found');

      right = foundParent.comment_right;

      await commentModel.updateMany(
        {
          postId: postId,
          comment_right: { $gte: right },
        },
        { $inc: { comment_right: 2 } }
      );

      await commentModel.updateMany(
        {
          postId: postId,
          comment_left: { $gt: right },
        },
        { $inc: { comment_left: 2 } }
      );
    } else {
      const maxRight = await commentModel.findOne(
        {
          postId: postId,
        },
        'comment_right',
        { sort: { comment_right: -1 } }
      );
      if (maxRight) {
        right = maxRight.comment_right + 1;
      } else {
        right = 1;
      }
    }

    const newComment = await commentModel.create({
      postId: postId,
      id: id,
      name: name,
      email: email,
      body: body,
      parentId: parentId,
      comment_left: right,
      comment_right: right + 1,
    });
    if (!newComment) throw new BadRequestError('Comment not created');
    return newComment;
  };
  static getCommentByParentId = async ({
    postId,
    parentId = null,
  }) => {
    if (!parentId) {
      const comments = await commentModel
        .find({
          postId: postId,
        })
        .sort({
          comment_left: 1,
        })
        .lean();

      return comments;
    }
    const parent = await findCommentById(parentId);
    if (!parent) throw new NotFoundError('Parent comment not found');
    const comments = await commentModel
      .find({
        postId: postId,
        comment_right: { $lt: parent.comment_right },
        comment_left: { $gt: parent.comment_left },
      })
      .sort({
        comment_left: 1,
      })
      .lean();
    
    return comments;
  };

  static deleteComments = async ({ postId, commentId }) => {
    const foundProduct = await findPostById(postId);
    if (!foundProduct) throw new NotFoundError('Post not found');
    const foundComment = await findCommentById(commentId);
    if (!foundComment) throw new NotFoundError('Comment not found');
    
    const left = foundComment.comment_left;
    const right = foundComment.comment_right;
    // Tính width
    const width = right - left + 1;
    // Xóa tất cả comment và comment con
    await commentModel.deleteMany({
      postId: postId,
      comment_left: { $gte: left, $lte: right },
    });
    // Cập nhật right và left cho các comment còn lại
    await commentModel.updateMany(
      {
        postId: postId,
        comment_right: { $gt: right },
      },
      {
        $inc: { comment_right: -width },
      }
    );
    await commentModel.updateMany(
      {
        postId: postId,
        comment_left: { $gt: right },
      },
      {
        $inc: { comment_left: -width },
      }
    );
    
    return true;
  };
  static getAllComments = async () => {
    return await commentModel.find({}).lean();
  }
}

module.exports = CommentService;
