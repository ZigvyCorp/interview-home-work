import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./router/post.js";
// Mock data
// import UserModel from "./model/User.js";
// import PostModel from "./model/Post.js";
// import CommentModel from "./model/Comment.js";
// import { users, posts, comments } from "./data/index.js";

// Configuration
const app = express();
app.use(cors());
app.use(express.json());

// Route
app.use("/api/v1/posts", postRouter);

// App listening on port 3500
app.listen(3500, () => console.log("Server running on port:", 3500));

// Database connection on mongodb atlas
const MONGO_URL = "mongodb+srv://thuan:1234@nodeexpress.pqqh4tt.mongodb.net/interview-home-work?retryWrites=true&w=majority";
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        // await UserModel.insertMany(users);
        // await PostModel.insertMany(posts);
        // await CommentModel.insertMany(comments);
        console.log("Connected DB");
    } catch (error) {
        console.log(error);
    }
}
connectDB();
