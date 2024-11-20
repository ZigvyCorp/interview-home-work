const mongoose = require("mongoose");
const cmtsSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("comments", cmtsSchema);
