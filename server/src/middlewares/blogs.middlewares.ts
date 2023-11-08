import { NextFunction, Request, Response } from 'express';
import { checkSchema } from 'express-validator';
import { ObjectId } from 'mongodb';

import { BlogAudience } from '~/constants/enum';
import HTTP_STATUS from '~/constants/httpStatus';
import { BLOGS_MESSAGES } from '~/constants/messages';
import { ErrorWithStatus } from '~/models/Errors';
import { BlogIdReqParams } from '~/models/requests/Blog.requests';
import { TokenPayload } from '~/models/requests/User.requests';
import databaseService from '~/services/database.services';
import { numberEnumToArray } from '~/utils/commons';
import { validate } from '~/utils/validation';

const blogAudiences = numberEnumToArray(BlogAudience);

// Blog ID validator
export const blogIdValidator = validate(
  checkSchema(
    {
      blog_id: {
        trim: true,
        custom: {
          options: async (value: string) => {
            if (!value) {
              throw new ErrorWithStatus({
                message: BLOGS_MESSAGES.BLOG_ID_IS_REQUIRED,
                status: HTTP_STATUS.BAD_REQUEST
              });
            }
            if (!ObjectId.isValid(value)) {
              throw new ErrorWithStatus({
                message: BLOGS_MESSAGES.BLOG_ID_IS_INVALID,
                status: HTTP_STATUS.BAD_REQUEST
              });
            }
            const blog = await databaseService.blogs.findOne({ _id: new ObjectId(value) });
            if (!blog) {
              throw new ErrorWithStatus({
                message: BLOGS_MESSAGES.BLOG_IS_NOT_EXISTED,
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

// Tạo blog
export const createBlogValidator = validate(
  checkSchema(
    {
      title: {
        trim: true,
        notEmpty: {
          errorMessage: BLOGS_MESSAGES.BLOG_TITLE_IS_REQUIRED
        }
      },
      content: {
        trim: true,
        notEmpty: {
          errorMessage: BLOGS_MESSAGES.BLOG_CONTENT_IS_REQUIRED
        }
      },
      audience: {
        optional: true,
        isIn: {
          options: [blogAudiences],
          errorMessage: BLOGS_MESSAGES.BLOG_AUDIENCE_IS_INVALID
        }
      }
    },
    ['body']
  )
);

// Cập nhật blog
export const updateBlogValidator = validate(
  checkSchema(
    {
      title: {
        optional: true,
        trim: true
      },
      content: {
        optional: true,
        trim: true
      },
      audience: {
        optional: true,
        isIn: {
          options: [blogAudiences],
          errorMessage: BLOGS_MESSAGES.BLOG_AUDIENCE_IS_INVALID
        }
      }
    },
    ['body']
  )
);

// Xác thực tác giả blog
export const blogAuthorValidator = async (req: Request<BlogIdReqParams>, res: Response, next: NextFunction) => {
  const { blog_id } = req.params;
  const { user_id } = req.decoded_authorization as TokenPayload;
  const blog = await databaseService.blogs.findOne({
    _id: new ObjectId(blog_id),
    user_id: new ObjectId(user_id)
  });
  if (!blog) {
    return next(
      new ErrorWithStatus({
        message: BLOGS_MESSAGES.BLOG_AUTHOR_IS_INVALID,
        status: HTTP_STATUS.FORBIDDEN
      })
    );
  }
  return next();
};

// Xoá blog (một hoặc nhiều)
export const deleteBlogsValidator = validate(
  checkSchema(
    {
      blog_ids: {
        custom: {
          options: async (value: string[], { req }) => {
            if (!value) {
              throw new ErrorWithStatus({
                message: BLOGS_MESSAGES.BLOG_IDS_IS_REQUIRED,
                status: HTTP_STATUS.BAD_REQUEST
              });
            }
            if (!Array.isArray(value)) {
              throw new ErrorWithStatus({
                message: BLOGS_MESSAGES.BLOG_IDS_MUST_BE_AN_ARRAY,
                status: HTTP_STATUS.BAD_REQUEST
              });
            }
            if (value.length === 0) {
              throw new ErrorWithStatus({
                message: BLOGS_MESSAGES.BLOG_IDS_MUST_NOT_BE_EMPTY,
                status: HTTP_STATUS.BAD_REQUEST
              });
            }
            const isValid = value.every((blog_id) => ObjectId.isValid(blog_id));
            if (!isValid) {
              throw new ErrorWithStatus({
                message: BLOGS_MESSAGES.BLOG_IDS_IS_INVALID,
                status: HTTP_STATUS.BAD_REQUEST
              });
            }
            const findedBlogs = await databaseService.blogs
              .find({
                _id: {
                  $in: value.map((blog_id) => new ObjectId(blog_id))
                }
              })
              .toArray();
            if (findedBlogs.length !== value.length) {
              throw new ErrorWithStatus({
                message: BLOGS_MESSAGES.BLOG_IS_NOT_EXISTED,
                status: HTTP_STATUS.NOT_FOUND
              });
            }
            const blogs = await databaseService.blogs
              .find(
                {
                  user_id: new ObjectId(((req as Request).decoded_authorization as TokenPayload).user_id)
                },
                {
                  projection: {
                    _id: 1
                  }
                }
              )
              .toArray();
            const __blogs = blogs.map((blog) => blog._id.toString());
            const __isValid = value.every((blog_id) => __blogs.includes(blog_id));
            if (!__isValid) {
              throw new ErrorWithStatus({
                message: BLOGS_MESSAGES.BLOG_AUTHOR_IS_INVALID,
                status: HTTP_STATUS.BAD_REQUEST
              });
            }
            return true;
          }
        }
      }
    },
    ['body']
  )
);
