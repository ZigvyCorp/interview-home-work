const Response = require("../response/Response")
const PostService = require("../services/PostService")

class PostController {

    async getAllPosts(req, res) {

        const { page, pageSize } = req.query
        const response = await PostService.getAll(page, pageSize)

        res.status(response.statusCode).json(new Response(
            response.status,
            response.message,
            response.data
        ))
    }

    async searchPost(req, res) {

        const { page, pageSize } = req.query
        const { keyword } = req.body
        const response = await PostService.getByTitle(keyword, page, pageSize)

        res.status(response.statusCode).json(new Response(
            response.status,
            response.message,
            response.data
        ))
    }

    async getPostById(req, res) {

        const { id } = req.params

        const response = await PostService.getById(id)

        res.status(response.statusCode).json(new Response(
            response.status,
            response.message,
            response.data
        ))
    }
}

module.exports = new PostController
