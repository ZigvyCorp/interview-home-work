import Joi from 'joi';

const getCommentsByPostSchema = {
    params: Joi.object().keys({
        postID: Joi.string()
            .pattern(/^[0-9a-fA-F]{24}$/)
            .required(),
    }),
};

const createPostSchema = {
    body: Joi.object().keys({
        owner: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
        title: Joi.string().required(),
        content: Joi.string().required(),
        tags: Joi.array().items(Joi.string(), Joi.number()),
    }),
};

const updatePostSchema = {
    params: Joi.object().keys({
        postID: Joi.string()
            .pattern(/^[0-9a-fA-F]{24}$/)
            .required(),
    }),
    body: Joi.object().keys({
        _id: Joi.string()
            .pattern(/^[0-9a-fA-F]{24}$/)
            .required(),
        owner: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
        title: Joi.string(),
        content: Joi.string(),
        tags: Joi.array().items(Joi.string(), Joi.number()),
    }),
};

const deletePostSchema = {
    params: Joi.object().keys({
        postID: Joi.string()
            .regex(/^[0-9a-fA-F]{24}$/)
            .required(),
    }),
};

export { createPostSchema, updatePostSchema, deletePostSchema, getCommentsByPostSchema };
