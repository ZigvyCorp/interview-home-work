'use strict';

const { searchPosts, getPost } = require('../services/post.service');

module.exports = {
  searchPosts: async (req, res, next) => {
    try {
      const { code, message, data, pagination } = await searchPosts(req.query);
      res.status(code).json({
        code,
        message,
        data,
        pagination,
      });
    } catch (error) {
      next(error);
    }
  },
  getPost: async (req, res, next) => {
    try {
      const { code, message, data } = await getPost(req.params.id);
      res.status(code).json({
        code,
        message,
        data,
      });
    } catch (error) {
      next(error);
    }
  }
}
