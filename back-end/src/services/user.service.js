'use strict';

const bcrypt = require('bcrypt');
const { BadRequestError } = require('../helpers/error-response');
const { findUserById, getUsers } = require('../models/repositories/user');
const userModel = require('../models/user.model');

class UserService {
  static createUser = async (payload) => {
    const {
      id,
      name = '',
      username,
      email,
      address,
      phone,
      website = '',
      company = {},
      password,
    } = payload;
    if (await findUserById(id))
      throw new BadRequestError('User id already exists');
    const passwordHash = await bcrypt.hash(password, 10);
    return await userModel.create({
      id,
      name,
      username,
      email,
      address,
      phone,
      website,
      company,
      password: passwordHash,
    });
  };

  static removeUserById = async (id) => {
    return await userModel.findOneAndDelete({ id });
  };
  static getAllUsers = async () => {
    return await getUsers({
      sorted: ['id'],
      isAscending: true,
      unSelect: ['__v', '_id', 'password'],
    });
  };
  static getUserById = async (id) => {
    return (await getUsers({
      filter: { id: id },
      unSelect: ['__v', '_id', 'password'],
    }))[0];
  };
}

module.exports = UserService;
