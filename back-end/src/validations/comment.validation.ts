import Joi from 'joi';

const createComment = {
  body: Joi.object().keys({
    user: Joi.string().required(),
    blog: Joi.string().required(),
    content: Joi.string().required(),
    commentedAt: Joi.date().optional(),
  }),
};

export const commentValidation = { createComment };
