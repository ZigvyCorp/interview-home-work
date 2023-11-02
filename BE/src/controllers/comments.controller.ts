import { NextFunction, Request, Response } from 'express'
import { COMMENT_REPONSE_MESSAGES } from '~/constants/messages.contants'
import { commentService } from '~/services/comments.services'

export const getCommentsByPostIdController = async (req: Request, res: Response, next: NextFunction) => {
  const { postId } = req.query
  const rs = await commentService.getCommentsByPostId({ postId: Number(postId) })
  return res.status(200).json({
    message: COMMENT_REPONSE_MESSAGES.GET_COMMENT_BY_POST_ID.SUCCESS,
    data: rs
  })
}
