import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";

dotenv.config();

mongoose
    // eslint-disable-next-line no-undef
    .connect(process.env.MONGODB)
    .then(() => {
        console.log("Connect to MongoDB!");
    })
    .catch((error) => {
        console.log(error);
    });

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

app.use("/api/user", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comment", commentRouter);
