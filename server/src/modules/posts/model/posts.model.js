const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  userId: Number,
  id: Number,
  title: String,
  body: String,
});

postSchema.plugin(mongoosePaginate);
const Posts = mongoose.model('posts', postSchema);
module.exports = Posts;
