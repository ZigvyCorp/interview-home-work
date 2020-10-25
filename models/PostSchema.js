const user_model = require("./UserSchema");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "user",
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
        created_at: {
            type: Date,
            default: function () {
                return Date.now();
            },
        },
        tag: [String],
    },
    {
        collection: "post",
    }
);

const Post = mongoose.model("post", postSchema);

module.exports = Post;
