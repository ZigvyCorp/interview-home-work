import express from 'express'
import * as commentController from '../controllers/commentController'

const router = express.Router()

router.get('/', commentController.getComments)

export default router