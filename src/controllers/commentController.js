const { Controller } = require('../../system/controllers/Controller');
const { Comment } = require('../models/Comment');

const { CommentService } = require('../services/commentService');
const commentService = new CommentService(new Comment().getInstance());
class CommentController extends Controller{
    constructor(service) {
      super(service);
    }

    async findAllComment(req, res) {
      const users = await commentService.findAllComment();
      res.status(200).json(users);
    }

    async findAllCommentByPostId(req, res) {
      const { postId } = req.query;
      console.log('========> 77 commentController: ', postId);
      const comment = await commentService.findAllCommentByPostId(postId);
      res.status(200).json(comment);
    }
  
    async createComment(req, res) {
      const { body } = req;
      const comment = await commentService.createComment(body);
      res.status(201).json(comment);
    }
  
}

module.exports = new CommentController(commentService);