import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the comment document
interface Comment extends Document {
    id: number;
    owner: number;
    post: number;
    content: string;
    created_at: Date;
}

// Define the schema for the comment collection
const commentSchema = new Schema<Comment>({
    id: { type: Number, required: true, unique: true },
    owner: { type: Number, required: true },
    post: { type: Number, required: true },
    content: { type: String, required: true },
    created_at: { type: Date },
});

// Create and export the Comment model
export default mongoose.model<Comment>("Comment", commentSchema);
