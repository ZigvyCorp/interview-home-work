const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userId: Number,
  id: Number,
  title: String,
  body: String,
});

module.exports = mongoose.model("Post", postSchema);
