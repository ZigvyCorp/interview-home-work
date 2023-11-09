const { Ok, Created } = require("../cores/success");
const postServices = require("../services/post.services");

class PostController {

    async getAllPosts(req, res) {
        const posts = await postServices.getPosts();

        return new Ok(posts, "Get all posts successfully").send(res);
    }

    async createPost(req, res) {
        const post = await postServices.createPost(req.params.userId,req.body);

        return new Created(post, "Create post successfully").send(res);
    }

    async getPostById(req, res) {
        const post = await postServices.getPostById(req.params.postId);

        return new Ok(post, "Get post by id successfully").send(res);
    }
}

module.exports = new PostController();