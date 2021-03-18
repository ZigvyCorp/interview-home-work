class BaseService {
  constructor(model) {
    this.model = model
  }

  create(entry) {
    const { id, createdAt, updatedAt, deletedAt, ...instance } = entry
    return this.model.create(instance)
  }

  update(id, modifier) {
    return this.model.update(modifier, { where: { id }})
  }

  findByPk(id) {
    return this.model.findByPk(id)
  }

  async findAndCountAll(query) {
    const { attributes, where, offset, limit } = query
    const totalCount = await this.model.count({where})
    const data = await this.model.findAll({ attributes, where, offset, limit })
    return { totalCount, data }
  }

  delete(id) {
    return this.model.destroy({ where: { id }})
  }

  destroy(id) {
    return this.model.destroy({ where: { id }, force: true })
  }
}

module.exports = BaseService