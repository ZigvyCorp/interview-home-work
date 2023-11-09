const {CommentModel} = require('../models/comment.model')

class CommentServices {
    async getComments() {
        return await CommentModel.find().lean();
    }

    async createComment(owner, post, comment) {
        return await CommentModel.create({...comment, owner, post});
    }

    async getCommentsByPostId(postId) {
        return await CommentModel.find({post: postId}).lean();
    }
}

module.exports = new CommentServices();