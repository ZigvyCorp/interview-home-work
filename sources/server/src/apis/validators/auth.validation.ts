import Joi from 'joi';

const loginSchema = {
    body: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
};

const registerSchema = {
    body: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
        name: Joi.string().required(),
        dob: Joi.string().required(),
    }),
};

const changePasswordSchema = {
    body: Joi.object().keys({
        passwordPre: Joi.string().required(),
        passwordNew: Joi.string().required(),
    }),
};

export { loginSchema, registerSchema, changePasswordSchema };
