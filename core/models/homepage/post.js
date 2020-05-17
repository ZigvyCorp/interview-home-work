var _ = require('lodash');
var Promise = require('bluebird');
var mongoose = require('mongoose');
var BaseModel = require('../base');

const { Schema } = mongoose;
const models = 'Post';
mongoose.Promise = Promise;

const PostSchema = new Schema(_.assignIn(_.clone(BaseModel), {
    ownerId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
    tags: {
      type: [],
      required: false,
    },
  }));
  
  PostSchema.set('toJSON', {
    transform: (doc, ret) => {
      return ret;
    },
  });
  
  module.exports = mongoose.model(models, PostSchema);