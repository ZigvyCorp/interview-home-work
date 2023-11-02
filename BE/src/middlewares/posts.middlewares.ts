import { checkSchema } from 'express-validator'
import { POST_ID_MESSAGES } from '~/constants/messages.contants'
import { validate } from '~/utils/validation'

export const getPostByIdValidator = validate(
  checkSchema(
    {
      postId: {
        trim: true,
        notEmpty: {
          errorMessage: POST_ID_MESSAGES.IS_REQUIRED
        }
      }
    },
    ['params']
  )
)
