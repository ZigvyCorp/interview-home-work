const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  postId: Number,
  id: Number,
  name: String,
  email: String,
  body: String,
});

commentSchema.plugin(mongoosePaginate);
const Comments = mongoose.model('comments', commentSchema);
module.exports = Comments;
