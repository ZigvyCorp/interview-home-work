const BaseController = require('./base-controller');
const TagsService = require('../services/tags-service');

class TagsController extends BaseController {
  constructor() {
    super(new TagsService())
  }
}

module.exports = TagsController