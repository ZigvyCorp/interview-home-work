import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { RouterPost } from '~/routes/v1/postRoutes'

const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({
    status: 'ok'
  })
})

Router.use('/posts', RouterPost)

export const API_V1 = Router