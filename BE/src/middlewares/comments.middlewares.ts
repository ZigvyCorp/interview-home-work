import { checkSchema } from 'express-validator'
import { COMMENT_REPONSE_MESSAGES, POST_ID_MESSAGES } from '~/constants/messages.contants'
import { validate } from '~/utils/validation'

export const getCommentsByPostIdValidator = validate(
  checkSchema(
    {
      postId: {
        trim: true,
        notEmpty: {
          errorMessage: POST_ID_MESSAGES.IS_REQUIRED
        }
      }
    },
    ['query']
  )
)
