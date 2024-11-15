import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { Users } from "./models/users.model";
import { Posts } from "./models/posts.model";
import { Comments } from "./models/comments.model";

import userRouter from "./routes/users.route";
import commentRouter from "./routes/comments.route";
import postRouter from "./routes/posts.route";
import { json } from "stream/consumers";

dotenv.config();
const app = express();
const port = process.env.PORT || 8001;
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mu8jy.mongodb.net/${process.env.DB}`
  )
  .then(() => console.log("Connect MongoDB successfully"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use(cors());
app.use("/", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
