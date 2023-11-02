import express from "express";
import mongoose from "mongoose";
import config from "./config/config";
import logging from "./config/logging";
import userRouter from "./routes/user";
import bodyParser from "body-parser";
import postRouter from "./routes/post";
import commentRouter from "./routes/comment";

const NAMESPACE = "SERVER";

const app = express();
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);

mongoose
  .connect(config.mongo.url, config.mongo.options)
  .then(() =>
    app.listen(config.server.port, () => {
      logging.info(
        NAMESPACE,
        `Running on Port: http://${config.server.hostname}:${config.server.port}`
      );
    })
  )
  .catch((error) => logging.error(NAMESPACE, error.message, error));
