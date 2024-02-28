'use strict'
const user = require('../user.model')

const findAllUserRepo = async ({ limit, sort, page, filter, select }) => {
  const foundUser = await user
    .find(filter)
    .sort(sort)
    .skip((page - 1) * limit)
    .limit(limit)
    .select(select)
    .lean()
  return await foundUser
}
const updateUserById = async ({ userId, objectParams, options }) => {
  const updated = await user.findOneAndUpdate(
    { _id: userId },
    objectParams,
    options,
  )
  return updated
}

module.exports = {
  findAllUserRepo,
  updateUserById,
}
