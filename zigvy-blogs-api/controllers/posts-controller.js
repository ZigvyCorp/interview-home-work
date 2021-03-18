const BaseController = require('./base-controller');
const PostsService = require('../services/posts-service');

class PostsController extends BaseController {
  constructor() {
    super(new PostsService())
  }
}

module.exports = PostsController