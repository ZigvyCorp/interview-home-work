const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    owner: {
      type: Number,
      required: true,
    },
    post: {
      type: Number,
      ref: "Interview_Zigvy_Post",
      required: true,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

CommentSchema.virtual("ownerDetail", {
  ref: "Interview_Zigvy_User",
  localField: "owner",
  foreignField: "id",
});

CommentSchema.virtual("postDetail", {
  ref: "Interview_Zigvy_Post",
  localField: "post",
  foreignField: "id",
});

module.exports = mongoose.model("Interview_Zigvy_Comment", CommentSchema);
