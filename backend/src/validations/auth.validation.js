const Joi = require('joi');

const register = {
    body: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required().min(12),
        name: Joi.string().required(),
        dob: Joi.date().required()

    })
}

const login = {
    body: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required().min(12),
    })
}

module.exports = {
    register,
    login
}