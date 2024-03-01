const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [],
  },
  { timestamps: true }
);

const BlogModel = mongoose.model('Blogs', BlogSchema);

module.exports = BlogModel;
