const Response = require("../response/Response")
const CommentService = require("../services/CommentService")

class CommentController {

    async getCommentByPost(req, res) {

        const { id } = req.params

        const response = await CommentService.getByPost(id)

        res.status(response.statusCode).json(new Response(
            response.status,
            response.message,
            response.data
        ))
    }

}

module.exports = new CommentController
