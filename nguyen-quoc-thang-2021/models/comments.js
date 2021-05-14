const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  postId: {
    type: String,
    ref: 'PostBlog',
  },
  _id: String,
  name: String,
  email: String,
  body: String,
});

module.exports = mongoose.model('Comment', commentsSchema);
