import mongoose from "mongoose";
import dotenv from "dotenv";

import comments from "../data/comments.js";
import posts from "../data/posts.js";
import users from "../data/users.js";

import Comment from "./models/commentModel.js";
import Post from "./models/postModel.js";
import User from "./models/userModel.js";

import connectDB from "./config/db.config.js";

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Comment.deleteMany();
        await Post.deleteMany();
        await User.deleteMany();

        const createUsers = await User.insertMany(users);
        const createComment = await Comment.insertMany(comments);

        const createPost = await Post.insertMany(posts);

        console.log("Data imported!");
        process.exit();
    } catch (error) {
        console.error(`Import data has error:${error}`);
        process.exit(1);
    }
};

const detroyData = async () => {
    try {
        await Comment.deleteMany();
        await Post.deleteMany();
        await User.deleteMany();

        console.log("Data destroyed!");
        process.exit();
    } catch (error) {
        console.error(`Destroy data has error:${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === "-d") {
    detroyData();
} else {
    importData();
}
