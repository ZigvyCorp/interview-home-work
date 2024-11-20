const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cmtSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  post: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  }
});

const Cmt = mongoose.model("comment", cmtSchema);
module.exports = Cmt;
