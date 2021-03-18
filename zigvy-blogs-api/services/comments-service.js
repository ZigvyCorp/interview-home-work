const Models = require('../models')
const BaseService = require('./base-service')

class CommentsService extends BaseService {
  constructor() {
    super(Models.Comments)
  }
}

module.exports = CommentsService