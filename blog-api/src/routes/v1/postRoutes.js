import express from 'express'
import { postValidation } from '~/validations/postValidation'
import { postController } from '~/controllers/postController'

const Router = express.Router()

Router.route('/')
  .get(postValidation.getPost, postController.getPost)

Router.route('/:id/comments')
  .get(postValidation.getCommentByPostID, postController.getCommentByPostID)

Router.route('/:id')
  .get(postController.getPostDetail)

export const RouterPost = Router