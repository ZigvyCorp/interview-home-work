'use strict';

const { OkResponse, CreatedResponse } = require('../helpers/success-response');
const CommentService = require('../services/comment.service');

class CommentController {
  static getCommentsByPostId = async (req, res, next) => {
    new OkResponse({
      message: 'Get comments successfully',
      metadata: await CommentService.getCommentByParentId({
        postId: req.params.postId,
        parentId: req.query.parentId,
      }),
    }).send(res);
  };
  static createComment = async (req, res, next) => {
    new CreatedResponse({
      message: 'Create comment successfully',
      metadata: await CommentService.createComment(req.body),
    }).send(res);
  };
  static getAllComments = async (req, res, next) => {
    new OkResponse({
      message: 'Get all comments successfully',
      metadata: await CommentService.getAllComments(),
    }).send(res);
  };
}

module.exports = CommentController;
