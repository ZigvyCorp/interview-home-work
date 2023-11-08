import { checkSchema } from 'express-validator';

import { USERS_MESSAGES } from '~/constants/messages';
import databaseService from '~/services/database.services';
import { validate } from '~/utils/validation';

// Đăng ký
export const registerValidator = validate(
  checkSchema(
    {
      email: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.EMAIL_IS_REQUIRED
        },
        isEmail: {
          errorMessage: USERS_MESSAGES.EMAIL_IS_INVALID
        },
        custom: {
          options: async (value: string) => {
            const user = await databaseService.users.findOne({
              email: value
            });
            if (user) {
              return Promise.reject(USERS_MESSAGES.EMAIL_ALREADY_EXISTS);
            }
          }
        }
      },
      password: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.PASSWORD_IS_REQUIRED
        },
        isLength: {
          errorMessage: USERS_MESSAGES.PASSWORD_IS_INVALID,
          options: {
            min: 6,
            max: 32
          }
        }
      },
      confirm_password: {
        trim: true,
        notEmpty: {
          errorMessage: USERS_MESSAGES.CONFIRM_PASSWORD_IS_REQUIRED
        },
        custom: {
          options: (value: string, { req }) => {
            if (value !== req.body.password) {
              throw new Error(USERS_MESSAGES.CONFIRM_PASSWORD_NOT_MATCH);
            }
            return true;
          }
        }
      }
    },
    ['body']
  )
);
