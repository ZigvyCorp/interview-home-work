import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the post document
interface Post extends Document {
    id: number;
    owner: number;
    title: string;
    content: string;
    created_at: Date;
    tags: string[];
}

// Define the schema for the post collection
const postSchema = new Schema<Post>({
    id: { type: Number, required: true, unique: true },
    owner: { type: Number, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    created_at: { type: Date },
    tags: [{ type: String }],
});

// Create and export the Post model
export default mongoose.model<Post>("Post", postSchema);
