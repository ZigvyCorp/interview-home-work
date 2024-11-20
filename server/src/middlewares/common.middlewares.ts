import { checkSchema } from 'express-validator';

import { COMMON_MESSAGES } from '~/constants/messages';
import { validate } from '~/utils/validation';

// Phân trang
export const paginationValidator = validate(
  checkSchema(
    {
      page: {
        optional: true,
        isInt: {
          options: {
            min: 1
          },
          errorMessage: COMMON_MESSAGES.PAGE_MUST_BE_A_POSITIVE_INTEGER
        }
      },
      limit: {
        optional: true,
        isInt: {
          options: {
            min: 1,
            max: 100
          },
          errorMessage: COMMON_MESSAGES.LIMIT_MUST_BE_A_POSITIVE_INTEGER_LESS_THAN_100
        }
      }
    },
    ['body']
  )
);
