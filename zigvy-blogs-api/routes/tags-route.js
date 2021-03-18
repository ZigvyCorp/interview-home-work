const TagsController = require('../controllers/tags-controller');
const BaseRoute = require('./base-route');
const AuthenticationMiddleware = require('../middlewares/authentication');

class TagsRoute extends BaseRoute {
  constructor() {
    super(new TagsController())
    this.middlewares = [AuthenticationMiddleware]
    this.registRoutes([])
  }
}

module.exports = TagsRoute