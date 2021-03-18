const BaseController = require('./base-controller');
const CommentsService = require('../services/comments-service');

class CommentsController extends BaseController {
  constructor() {
    super(new CommentsService())
  }
}

module.exports = CommentsController