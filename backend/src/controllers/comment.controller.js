const commentService = require('../services/comment.service')
const { OK, Created, Updated } = require('../core/success.response')

const HEADER = {
  USER_ID: 'x-user-id',
}

class CommentController {
  createComment = async (req, res, next) => {
    const user_id = req.headers[HEADER.USER_ID]?.toString()
    new Created({
      data: await commentService.createComment(user_id, req.body),
    }).send(res)
  }
  updateComment = async (req, res, next) => {
    new OK({
      data: await commentService.updateComment(req.body),
    }).send(res)
  }
  deleteComment = async (req, res, next) => {
    const comment_id = req.params
    new OK({
      data: await commentService.deleteComment(comment_id),
    }).send(res)
  }
}
module.exports = new CommentController()
