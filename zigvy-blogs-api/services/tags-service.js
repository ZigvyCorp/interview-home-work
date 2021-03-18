const Models = require('../models')
const BaseService = require('./base-service')

class TagsService extends BaseService {
  constructor() {
    super(Models.Tags)
  }
}

module.exports = TagsService