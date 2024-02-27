const postController = require('../services/post.service')
const { OK, Created, Updated } = require('../core/success.response')

class PostController {
  getAllPost = async (req, res, next) => {
    new OK({
      data: await postController.findAllPost(req.query),
    }).send(res)
  }
  getPostById = async (req, res, next) => {
    const post_id = req.params
    new OK({
      data: await postController.findPostById(post_id),
    }).send(res)
  }
  createPost = async (req, res, next) => {
    new Created({
      data: await postController.createPost(req.body),
    }).send(res)
  }
  updatePost = async (req, res, next) => {
    const post_id = req.params
    new Updated({
      data: await postController.updatePost(post_id, req.body),
    }).send(res)
  }
}
module.exports = new PostController()
