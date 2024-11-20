import { checkSchema } from 'express-validator';
import { ObjectId } from 'mongodb';
import { Request, Response, NextFunction } from 'express';

import HTTP_STATUS from '~/constants/httpStatus';
import { COMMENTS_MESSAGES } from '~/constants/messages';
import { ErrorWithStatus } from '~/models/Errors';
import databaseService from '~/services/database.services';
import { validate } from '~/utils/validation';
import { CommentIdReqParams } from '~/models/requests/Comment.request';
import { TokenPayload } from '~/models/requests/User.requests';

// Thêm bình luận
export const createCommentValidator = validate(
  checkSchema(
    {
      content: {
        trim: true,
        notEmpty: {
          errorMessage: COMMENTS_MESSAGES.COMMENT_CONTENT_IS_REQUIRED
        }
      }
    },
    ['body']
  )
);

// Comment ID validator
export const commentIdValidator = validate(
  checkSchema(
    {
      comment_id: {
        trim: true,
        custom: {
          options: async (value: string) => {
            if (!value) {
              throw new ErrorWithStatus({
                message: COMMENTS_MESSAGES.COMMENT_ID_IS_REQUIRED,
                status: HTTP_STATUS.BAD_REQUEST
              });
            }
            if (!ObjectId.isValid(value)) {
              throw new ErrorWithStatus({
                message: COMMENTS_MESSAGES.COMMENT_ID_IS_INVALID,
                status: HTTP_STATUS.BAD_REQUEST
              });
            }
            const comment = await databaseService.comments.findOne({ _id: new ObjectId(value) });
            if (!comment) {
              throw new ErrorWithStatus({
                message: COMMENTS_MESSAGES.COMMENT_IS_NOT_EXISTED,
                status: HTTP_STATUS.NOT_FOUND
              });
            }
            return true;
          }
        }
      }
    },
    ['params']
  )
);

// Cập nhật bình luận
export const updateCommentValidator = validate(
  checkSchema(
    {
      content: {
        trim: true,
        notEmpty: {
          errorMessage: COMMENTS_MESSAGES.COMMENT_CONTENT_IS_REQUIRED
        }
      }
    },
    ['body']
  )
);

// Kiểm tra xem người dùng có phải là tác giả của bình luận hay không
export const commentAuthorValidator = async (req: Request<CommentIdReqParams>, res: Response, next: NextFunction) => {
  const { comment_id } = req.params;
  const { user_id } = req.decoded_authorization as TokenPayload;
  const comment = await databaseService.comments.findOne({
    _id: new ObjectId(comment_id),
    user_id: new ObjectId(user_id)
  });
  if (!comment) {
    return next(
      new ErrorWithStatus({
        message: COMMENTS_MESSAGES.COMMENT_AUTHOR_IS_INVALID,
        status: HTTP_STATUS.FORBIDDEN
      })
    );
  }
  return next();
};
