import { NextFunction, Request, Response } from 'express';
import { ValidationChain, validationResult } from 'express-validator';
import { RunnableValidationChains } from 'express-validator/src/middlewares/schema';

import HTTP_STATUS from '~/constants/httpStatus';
import { EntityError, ErrorWithStatus } from '~/models/Errors';

// sequential processing, stops running validations chain if the previous one fails.
export const validate = (validation: RunnableValidationChains<ValidationChain>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await validation.run(req);
    const errors = validationResult(req);
    // Nếu không có lỗi thì next tiếp tục request
    if (errors.isEmpty()) {
      return next();
    }
    // Xử lý khi có lỗi
    const errorsObject = errors.mapped();
    const entityError = new EntityError({ errors: {} });
    for (const key in errorsObject) {
      const { msg } = errorsObject[key];
      // Trả về lỗi không phải là lỗi do validate (422)
      if (msg instanceof ErrorWithStatus && msg.status !== HTTP_STATUS.UNPROCESSABLE_ENTITY) {
        return next(msg);
      }
      entityError.data[key] = errorsObject[key].msg;
    }
    next(entityError);
  };
};
