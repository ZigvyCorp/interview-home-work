const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        post: {
            type: Schema.Types.ObjectId,
            ref: "post",
            required: true,
        },
        content: String,
        created_at: {
            type: Date,
            default: function () {
                return Date.now() + 5 * 365 * 24 * 60 * 60 * 1000;
            },
        },
    },
    {
        collection: "comment",
    }
);

const comment = mongoose.model("comment", commentSchema);

module.exports = comment;
