import { StatusCodes } from 'http-status-codes'

export const handling404Middleware = (req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).json({ statusCode: StatusCodes.NOT_FOUND, message: 'Not Found' })
}
