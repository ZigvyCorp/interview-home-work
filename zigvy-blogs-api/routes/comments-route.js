const CommentsController = require('../controllers/comments-controller');
const BaseRoute = require('./base-route');
const AuthenticationMiddleware = require('../middlewares/authentication');

class CommentsRoute extends BaseRoute {
  constructor() {
    super(new CommentsController())
    this.middlewares = [AuthenticationMiddleware]
    this.registRoutes([])
  }
}

module.exports = CommentsRoute