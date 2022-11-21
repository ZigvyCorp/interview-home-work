const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const postSchema = mongoose.Schema(
  {
    owner: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

postSchema.plugin(mongoosePaginate);
/**
 * @typedef Post
 */
module.exports = mongoose.model("Post", postSchema);
