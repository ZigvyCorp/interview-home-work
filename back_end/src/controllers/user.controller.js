'use strict';

const { getAllUsers } = require('../services/user.service');

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const { code, message, data } = await getAllUsers();
      res.status(code).json({ code, message, data });
    } catch (error) {
      next(error);
    }
  }
}
