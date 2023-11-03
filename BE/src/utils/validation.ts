import { NextFunction, Request, Response } from 'express'
import { ValidationChain, validationResult } from 'express-validator'
import { RunnableValidationChains } from 'express-validator/src/middlewares/schema'
import { ServerStatus } from '~/constants/enum'
import { ErrorEntityStatus, ErrorWithStatus } from '~/models/Errors'

export const validate = (validations: RunnableValidationChains<ValidationChain>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await validations.run(req)
    const errors = validationResult(req)
    if (errors.isEmpty()) return next()
    const errorsObject = errors.mapped()
    const entityError = new ErrorEntityStatus({ errors: {} })
    for (const key in errorsObject) {
      const { msg } = errorsObject[key]
      if (msg instanceof ErrorWithStatus && msg.status !== ServerStatus.UNPROCESSABLE_ENTITY) {
        return next(msg)
      }
      entityError.errors[key] = errorsObject[key]
    }
    next(entityError)
  }
}
