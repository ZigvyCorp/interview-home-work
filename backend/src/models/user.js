import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import Joi from '@hapi/joi'
import bcrypt from 'bcrypt'

import config from '../config'
import { Genders, DefaultSchemaValues, SaltRounds } from '../utils/constants'
import { hashPassword } from '../utils/helpers'

const schema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, default: DefaultSchemaValues.UnknownUser },
    dob: Date,
    gender: { type: String, enum: Object.values(Genders), default: Genders.Male },
    picture: String,
    deletedAt: Date,
  },
  { timestamps: true },
)

schema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next()
  }

  const { error } = this.joiValidate(this)
  if (error) {
    throw err
  }

  const salt = await bcrypt.genSalt(SaltRounds)
  this.password = await bcrypt.hash(this.password, salt)

  next()
})

schema.methods.joiValidate = function(obj) {
  return Joi.object({
    username: Joi.string()
      .min(8)
      .required(),
    password: Joi.string()
      .min(8)
      .max(30)
      .required(),
    name: Joi.string(),
    dob: Joi.date(),
    gender: Joi.string()
      .valid(...Object.values(Genders))
      .default(Genders.Male),
    picture: Joi.string().uri(),
  }).validate(obj, config.joiValidationOptions)
}

schema.methods.comparePassword = function(plainTextPassword) {
  return bcrypt.compare(plainTextPassword, this.password)
}

schema.plugin(uniqueValidator)

export default mongoose.model('User', schema)
