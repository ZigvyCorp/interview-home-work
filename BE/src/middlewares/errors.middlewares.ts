import { NextFunction, Request, Response } from 'express'
import { omit } from 'lodash'
import { ServerStatus } from '~/constants/enum'
import { ErrorEntityStatus, ErrorWithStatus } from '~/models/Errors'

type ErrorHandleType = ErrorWithStatus | ErrorEntityStatus | Error

export const defaultErrorHandler = (err: ErrorHandleType, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ErrorWithStatus) {
    return res.status(err.status).json(omit(err, 'status'))
  }
  Object.getOwnPropertyNames(err).forEach((key) => {
    Object.defineProperty(err, key, {
      enumerable: true
    })
  })
  res.status(ServerStatus.INTERNAL_SERVER_ERROR).json({ message: err.message, error: omit(err, 'stack') })
}
