'use strict';

const _User = require('../models/user.model');

module.exports = {
  getAllUsers: async () => {
    try {
      const users = await _User.find();
      return {
        code: 200,
        message: 'Get all users success',
        data: users,
      }
    } catch (error) {
      throw error;
    }
  }
}
