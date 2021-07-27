import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import connection from "./database/connection.js";
import postRouter from "./routes/post.route.js";
import userRouter from "./routes/user.route.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    origin: process.env.NODE_ENV === "production" ? "https://" : "http://localhost:3000",
  }),
);
app.use(morgan("tiny"));

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to backend web!");
});

connection
  .then(() => app.listen(PORT, () => console.log(`server run on localhost:${PORT}`)))
  .catch((err) => {
    console.log(err);
  });
