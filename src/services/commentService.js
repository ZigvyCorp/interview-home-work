'use strict';
const { Service } = require("../../system/services/Service");
class CommentService extends Service{
    constructor(model) {
        super(model);
        this.model = model;
    }

    async findAllComment() {
        try {
            const comments = await this.model.find();
            if (comments) {
                return comments;
            }
            throw new Error('Có lỗi, bạn có thể thử lại sau');
        } catch (error) {
            throw new Error(error.message || 'Có lỗi, bạn có thể thử lại sau');
        }
    }

    async findAllCommentByPostId(id) {
        try {
            const comments = await this.model.find({ postId: id });
            if (comments) {
                return comments;
            }
            throw new Error('Có lỗi, bạn có thể thử lại sau');
        } catch (error) {
            throw new Error(error.message || 'Có lỗi, bạn có thể thử lại sau');
        }
    }


    async createComment(body) {
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

    async deleteCommentByPostId(id) {
        try {
            const item = await this.model.deleteMany({ postId: id });
              if (item) {
                  return item;
              }
              throw new Error('Có lỗi, bạn có thể thử lại sau');
          
        } catch (error) {
            throw new Error(error.message || 'Có lỗi, bạn có thể thử lại sau');
        }
    }
 
}

module.exports = { CommentService };