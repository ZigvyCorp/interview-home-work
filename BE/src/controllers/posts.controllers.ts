import { NextFunction, Request, Response } from 'express'
import { POST_REPONSE_MESSAGES } from '~/constants/messages.contants'
import { postService } from '~/services/posts.services'

export const getAllPostController = async (req: Request, res: Response, next: NextFunction) => {
  const rs = await postService.getAllPost()
  return res.status(200).json({
    message: POST_REPONSE_MESSAGES.GET_ALL_POSTS.SUCCESS,
    data: rs
  })
}

export const getPostByIdController = async (req: Request, res: Response, next: NextFunction) => {
  const { postId } = req.params
  const rs = await postService.getPostById({ postId: Number(postId) })
  return res.status(200).json({
    message: POST_REPONSE_MESSAGES.GET_POST_BY_ID.SUCCESS,
    data: rs
  })
}
