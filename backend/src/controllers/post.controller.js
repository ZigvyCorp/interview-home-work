const postController = require('../services/post.service')
const { OK, Created, Updated } = require('../core/success.response')
const HEADER = {
  USER_ID: 'x-user-id',
}
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
  getPostByText = async (req, res, next) => {
    const text = req.params
    new OK({
      data: await postController.findPostByText(text),
    }).send(res)
  }
  createPost = async (req, res, next) => {
    const user_id = req.headers[HEADER.USER_ID]?.toString()
    new Created({
      data: await postController.createPost(user_id, req.body),
    }).send(res)
  }
  updatePost = async (req, res, next) => {
    // const post_id = req.params
    new Updated({
      data: await postController.updatePost(req.body),
    }).send(res)
  }
}
module.exports = new PostController()
