import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the user document
interface User extends Document {
    id: number;
    username: string;
    password: string;
    name: string;
    dob: string;
    created_at: Date;
}

// Define the schema for the user collection
const userSchema = new Schema<User>({
    id: { type: Number, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String },
    dob: { type: String },
    created_at: { type: Date, default: Date.now },
});

// Create and export the User model
export default mongoose.model<User>("User", userSchema);
