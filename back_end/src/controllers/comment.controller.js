'use strict'

const { getAllComments } = require('../services/comment.service');

module.exports = {
  getAllComments: async (req, res, next) => {
    try {
      const { code, message, data } = await getAllComments();
      res.status(code).json({ code, message, data });
    } catch (error) {
      next(error);
    }
  },
}
