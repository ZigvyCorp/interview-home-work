const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema(
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
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      default: "",
    },
    tags: [{
      type: String,
    }],
  },
  { timestamps: true }
);

PostSchema.virtual("ownerDetail", {
  ref: "Interview_Zigvy_User",
  localField: "owner",
  foreignField: "id",
});

module.exports = mongoose.model("Interview_Zigvy_Post", PostSchema);
