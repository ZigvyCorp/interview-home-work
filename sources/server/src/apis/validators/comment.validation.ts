import Joi from 'joi';

const createCommentSchema = {
    body: Joi.object().keys({
        post: Joi.string()
            .pattern(/^[0-9a-fA-F]{24}$/)
            .required(),
        content: Joi.string().required(),
    }),
};

const deleteCommentSchema = {
    params: Joi.object().keys({
        commentID: Joi.string()
            .pattern(/^[0-9a-fA-F]{24}$/)
            .required(),
    }),
};

export { createCommentSchema, deleteCommentSchema };
