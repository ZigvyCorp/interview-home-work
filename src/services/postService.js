'use strict';
// const autoBind = require('auto-bind');
const { Service } = require("../../system/services/Service");
class PostService extends Service{
    constructor(model) {
        super(model);
        this.model = model;
    }

    async findAllPost() {
        try {
            const posts = await this.model.find();
            if (posts) {
                return posts;
            }
            throw new Error('Có lỗi, bạn có thể thử lại sau');
        } catch (error) {
            throw new Error(error.message || 'Có lỗi, bạn có thể thử lại sau');
        }
    }

    async findById(id) {
        try {
            const post = await this.model.findById(id);
            if (post) {
                return post;
            }
            throw new Error('Có lỗi, bạn có thể thử lại sau');
        } catch (error) {
            throw new Error(error.message || 'Có lỗi, bạn có thể thử lại sau');
        }
    }


    async createPost(body) {
        try {
            const item = await this.model.create(body);
              if (item) {
                  return item;
              }
              throw new Error('Có lỗi, bạn có thể thử lại sau');
          
        } catch (error) {
            throw new Error(error.message || 'Có lỗi, bạn có thể thử lại sau');
        }
    }

    async updatePost(id, data) {
        try {
            const update = await this.model.findByIdAndUpdate(id,data);
              if (update) {
                  const afterUpdate = await this.model.findById(id);
                  return afterUpdate;
              }
              throw new Error('Có lỗi, bạn có thể thử lại sau');
          
        } catch (error) {
            throw new Error(error.message || 'Có lỗi, bạn có thể thử lại sau');
        }
    }

    async deletePost(id) {
        try {
            const deletePost = await this.model.findByIdAndDelete(id);
            if (!deletePost) {
                const error = new Error('Post not found');
                error.statusCode = 404;
                throw error;
            } else {
                return deletePost;
            }
          
        } catch (error) {
            throw new Error(error.message || 'Có lỗi, bạn có thể thử lại sau');
        }
    }

 
}

module.exports = { PostService };