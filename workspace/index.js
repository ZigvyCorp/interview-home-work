import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

import postRouter from "./routes/post.routes"
import connectdb from "./utils/connectdb";
config();

const app = express();
await connectdb();
app.use(express.json());
app.use(cookieParser());


app.use("/api/v1/posts", postRouter)

app.use((err, req, res, next) => {
  console.debug(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error!";
  res.status(statusCode).json({
    statusCode,
    message,
  });
  next();
});

app.listen(3000, () => console.log("server is running on port: 3000"));
