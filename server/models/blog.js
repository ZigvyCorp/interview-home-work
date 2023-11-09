const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const blogSchema = new mongoose.Schema(
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
      trim: true,
      min: 3,
      max: 160,
      required: true,
    },
    content: {
      type: String,
      required: true,
      minlength: 200, // Adjusted from min to minlength
      maxlength: 2000000,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    tags: {
      type: [String],
      required: true,
    },
    // ... other fields remain unchanged
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
