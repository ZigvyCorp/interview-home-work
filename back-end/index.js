import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postsRouter from "./routers/posts.js";
import chalk from "chalk";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.DATABASE_URL;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", postsRouter);

mongoose
  .connect(URI)
  .then(() => {
    console.log(chalk.yellowBright(`Connected DATABASE`));
    app.listen(PORT, () => {
      console.log(
        chalk.greenBright(`API listening on port ${process.env.PORT}!`),
      );
    });
  })
  .catch((err) => {
    console.log("err", err);
  });

