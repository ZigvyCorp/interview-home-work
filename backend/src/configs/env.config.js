require('dotenv').config()
const Joi = require('joi')

const envSchema = Joi.object({
  PORT: Joi.number().integer().min(1).default(8000),
  MONGO_URL: Joi.string().required(),
}).unknown()

const { error, value } = envSchema.validate(process.env)

if (error) {
  throw new Error(error.message)
}

module.exports = value
