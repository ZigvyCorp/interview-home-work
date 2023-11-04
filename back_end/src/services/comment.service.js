'use strict';

const _Comment = require('../models/comment.schema');

module.exports = {
  getAllComments: async () => {
    try {
      const comments = await _Comment.find();
      return {
        code: 200,
        message: 'Get all comments success',
        data: comments,
      }
    } catch (error) {
      throw error;
    }
  },
}
