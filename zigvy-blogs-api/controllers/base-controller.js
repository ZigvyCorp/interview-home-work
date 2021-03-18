const { ResponseMessage, RequestMessage } = require('../messages')

class BaseController {
  constructor(service) {
    this.service = service
  }

  async create(req, res) {
    try {
      const entry = req.body;
      const data = await this.service.create(entry)
      ResponseMessage.success(res, data)
    } catch (e) {
      ResponseMessage.error(res, e)
    }
  }

  async update(req, res) {
    try {
      const { id, ...modifier} = req.body
      await this.service.update(id, modifier)
      ResponseMessage.success(res)
    } catch (e) {
      ResponseMessage.error(res, e)
    }
  }

  async find(req, res) {
    try {
      const query = RequestMessage.parseQuery(req.query)
      const { id } = query
      const data = id ? await this.service.findByPk(id) : await this.service.findAndCountAll(query)
      ResponseMessage.success(res, data)
    } catch (e) {
      ResponseMessage.error(res, e)
    }
  }

  async destroy(req, res) {
    try {
      const { id, hard } = req.query
      hard ? await this.service.destroy(id) : await this.service.delete(id)
      ResponseMessage.success(res)
    } catch (e) {
      ResponseMessage.error(res, e)
    }
  }
}

module.exports = BaseController