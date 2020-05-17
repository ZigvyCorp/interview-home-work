var _ = require('lodash');
var Promise = require('bluebird');
var mongoose = require('mongoose');
var BaseModel = require('../base');

const { Schema } = mongoose;
const models = 'User';
mongoose.Promise = Promise;

const UserSchema = new Schema(_.assignIn(_.clone(BaseModel), {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    dob: {
      type: String,
      required: false,
    },
  }));
  
  UserSchema.set('toJSON', {
    transform: (doc, ret) => {
      return ret;
    },
  });
  
  module.exports = mongoose.model(models, UserSchema);