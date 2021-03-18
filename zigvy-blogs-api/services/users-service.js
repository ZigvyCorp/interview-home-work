const Models = require('../models')
const BaseService = require('./base-service')
const { hashPashword } = require('../utilities/password')
const { CoreError } = require('../messages')

class UsersService extends BaseService {
  constructor() {
    super(Models.Users)
  }

  async create(entry) {
    const { username, password, name, dob } = entry
    const isExisted = await Models.Users.count({ where: { username }}) > 0
    if (isExisted) {
      throw new CoreError(100000)
    }

    const hash = await hashPashword(password)
    await Models.Users.create({ username, password: hash, name, dob })
  }
}

module.exports = UsersService