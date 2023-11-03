import { Router } from 'express'
import { getAllUsersController } from '~/controllers/users.controllers'
import { wrapRequestHandler } from '~/utils/handlers'

const usersRouter = Router()

usersRouter.get('/', wrapRequestHandler(getAllUsersController))

export default usersRouter
