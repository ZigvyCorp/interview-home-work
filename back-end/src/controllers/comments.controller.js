const { Ok, Created } = require("../cores/success");
const commentServices = require("../services/comment.services");

class PostController {

    async getAllComments(req, res) {
        const comments = await commentServices.getComments();

        return new Ok(comments, "Get all comments successfully").send(res);
    }

    async createComment(req, res) {
        const comment = await commentServices.createComment(req.params.userId, req.params.postId, req.body);

        return new Created(comment, "Create comment successfully").send(res);
    }

    async getCommentByPostId(req, res) {
        const comments = await commentServices.getCommentsByPostId(req.params.postId);

        return new Ok(comments, "Get comments by post id successfully").send(res);
    }
}

module.exports = new PostController();