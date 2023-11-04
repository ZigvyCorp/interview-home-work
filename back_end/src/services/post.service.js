'use strict';

const _Post = require('../models/post.schema');

module.exports = {
  searchPosts: async (query) => {
    try {
      const { limit, skip, keyword } = query ?? {};

      const filter = { title: { $regex: new RegExp(keyword, 'i') } };

      const total = await _Post.countDocuments(filter);

      const posts = await _Post.find(
        filter,
        null, 
        {
          limit,
          skip,
        }
      );

      return {
        code: 200,
        message: 'Search posts success',
        data: {
          posts,
          pagination: {
            page: skip / limit + 1,
            limit: +limit,
            total,
          }
        }
      }
    } catch (error) {
      throw error;
    }
  },
  getPost: async (id) => {
    try {
      const post = await _Post.findOne({ _id: id });
      return {
        code: 200,
        message: 'Get post success',
        data: post,
      }
    } catch (error) {
      throw error;
    }
  }
}
