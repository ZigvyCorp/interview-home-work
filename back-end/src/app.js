import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { userRouter } from "./routers/user.r.js";
import { postRouter } from "./routers/post.r.js";
import { commentRouter } from "./routers/comment.r.js";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connect to MongoDB successfully");
    startServer();
  })
  .catch((e) => {
    console.log("Cannot connect to MongoDB. Error: " + e.message);
  });

const startServer = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ credentials: true, origin: process.env.FE_URL }));

  app.use("/api/users", userRouter);
  app.use("/api/posts", postRouter);
  app.use("/api/comments", commentRouter);

  app.get("/", (req, res) => {
    res.json({ message: "success" });
  });

  app.listen(5000, () => {
    console.log("Server starts at http://localhost:5000");
  });
};
