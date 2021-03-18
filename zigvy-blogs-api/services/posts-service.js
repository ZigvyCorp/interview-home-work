const Models = require('../models')
const BaseService = require('./base-service')
const { Op } = require('sequelize')

class PostsService extends BaseService {
  constructor() {
    super(Models.Posts)
  }

  async findAndCountAll(query) {
    const { attributes, search, where, offset, limit, orderBy, orderSort } = query
    
    if (search) {
      const like = `%${search}%`
      where[Op.or] = {
        title: {
          [Op.like]: like
        },
        content: {
          [Op.like]: like
        }
      }
    }

    const order = orderBy && orderSort ? [[orderBy, orderSort]] : [['updatedAt', 'DESC']]

    const totalCount = await this.model.count({where})
    const data = await this.model.findAll({
      attributes,
      where,
      include: [
        { model: Models.Users, attributes: ['name'] },
        { model: Models.Tags, attributes: ['value', 'color'] },
        { model: Models.Comments, include: [ { model: Models.Users, attributes: ['name'] }] }
      ],
      order,
      offset,
      limit
    })

    return { totalCount, data }
  }
}

module.exports = PostsService