const PostsController = require('../controllers/posts-controller');
const BaseRoute = require('./base-route');
const AuthenticationMiddleware = require('../middlewares/authentication');

class PostsRoute extends BaseRoute {
  constructor() {
    super(new PostsController())
    this.middlewares = [AuthenticationMiddleware]
    this.registRoutes([])
  }
}

module.exports = PostsRoute