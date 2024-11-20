import { Router } from 'express'
import { getCommentsByPostIdController } from '~/controllers/comments.controller'
import { getCommentsByPostIdValidator } from '~/middlewares/comments.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'

const commentsRouter = Router()

commentsRouter.get('/', getCommentsByPostIdValidator, wrapRequestHandler(getCommentsByPostIdController))

export default commentsRouter
