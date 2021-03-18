const Joi = require('joi')

module.exports.registerUserSchema = Joi.object({
  username: Joi.string().regex(/^[a-z._]+$/).min(8).max(30).required(),
  password: Joi.string().min(8).max(255).required(),
  name: Joi.string().max(255),
  dob: Joi.date()
})

class Validator {
  static async validate(data, schema) {
    await schema.validateAsync(data)

  }
}