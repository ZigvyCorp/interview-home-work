const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
  userId: {
    type: String,
    ref: 'User',
  },
  _id: String,
  title: String,
  body: String,
});

module.exports = mongoose.model('PostBlog', postsSchema);
