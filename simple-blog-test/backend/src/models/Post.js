import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const PostModel = mongoose.model("Post", PostSchema);
export default PostModel;