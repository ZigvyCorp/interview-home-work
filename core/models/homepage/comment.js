var _ = require('lodash');
var Promise = require('bluebird');
var mongoose = require('mongoose');
var BaseModel = require('../base');

const { Schema } = mongoose;
const models = 'Comment';
mongoose.Promise = Promise;

const CommentSchema = new Schema(_.assignIn(_.clone(BaseModel), {
    ownerId: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: false,
    },
  }));
  
  CommentSchema.set('toJSON', {
    transform: (doc, ret) => {
      return ret;
    },
  });
  
  module.exports = mongoose.model(models, CommentSchema);