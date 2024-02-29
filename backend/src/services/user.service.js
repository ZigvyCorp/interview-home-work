'use strict'
const { findAllUserRepo, updateUserById } = require('../models/repo/user.repo')
const user = require('../models/user.model')
const { removeUndefined } = require('../utils')

const createUser = async (userdata) => {
  const existUser = await user.findOne({ email: userdata.email })
  if (existUser) {
    throw new Error('Email already exist')
  }
  const foundUserId = await user.findOne().sort('-_id').exec()
  const newUser = user.create({ ...userdata, _id: foundUserId._id + 1 })
  return newUser
}
const findAllUser = async ({
  limit = 10,
  sort = 'ctime',
  page = 1,
  filter = {},
  select,
}) => {
  const foundUser = findAllUserRepo({
    limit,
    sort,
    page,
    filter,
    select,
  })
  if (!foundUser) throw new Error('Get all user failed')
  return foundUser
}
const updateUser = async ({
  _id,
  name,
  username,
  email,
  address,
  company,
  phone,
  website,
}) => {
  const foundUser = await user.findOne({ _id: _id })
  if (!foundUser) throw new Error('User not found')
  const userId = _id
  const update = {
    name,
    username,
    email,
    address: address,
    phone,
    website,
    company: company,
  }
  const options = { new: true }
  const objectParams = await removeUndefined(update)
  const updatedUser = await updateUserById({ userId, objectParams, options })
  if (!updatedUser) throw new Error('Update user failed')
  return updatedUser
}
const findUserById = async ({ id }) => {
  const foundUser = await user.findOne({ _id: id })
  return foundUser ? foundUser : 'User not found'
}
const deleteUser = async ({ id }) => {
  const foundUser = await user.findOne({ _id: id })
  if (!foundUser) throw new Error('User not found')
  await user.deleteOne({ _id: id })
  return {
    message: 'User deleted successfully',
  }
}
module.exports = {
  createUser,
  findAllUser,
  updateUser,
  deleteUser,
  findUserById,
}
