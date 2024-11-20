import { Router } from 'express'
import { getAllPostController, getPostByIdController } from '~/controllers/posts.controllers'
import { getPostByIdValidator } from '~/middlewares/posts.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'

const postsRouter = Router()

postsRouter.get('/', wrapRequestHandler(getAllPostController))
postsRouter.get('/:postId', getPostByIdValidator, wrapRequestHandler(getPostByIdController))

export default postsRouter
