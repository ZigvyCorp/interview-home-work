import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./routes/posts.js";

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.port || 5000;

const URI =
  "mongodb+srv://sweetcorgii:12091998@cluster0.m205w0e.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "" }));
app.use(cors());

app.use("/posts", posts);

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
