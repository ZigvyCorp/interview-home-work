import Joi from 'joi';

const createUserSchema = {
    body: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
        name: Joi.string().required(),
        dob: Joi.date().required(),
    }),
};

const updateUserSchema = {
    params: Joi.object().keys({
        userID: Joi.string()
            .regex(/^[0-9a-fA-F]{24}$/)
            .required(),
    }),
    body: Joi.object().keys({
        username: Joi.string(),
        name: Joi.string(),
        dob: Joi.date(),
    }),
};

const deleteUserSchema = {
    params: Joi.object().keys({
        userID: Joi.string()
            .regex(/^[0-9a-fA-F]{24}$/)
            .required(),
    }),
};

const getPostsByUserSchema = {
    params: Joi.object().keys({
        userID: Joi.string()
            .regex(/^[0-9a-fA-F]{24}$/)
            .required(),
    }),
};
export { createUserSchema, updateUserSchema, deleteUserSchema, getPostsByUserSchema };
