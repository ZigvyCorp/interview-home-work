import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connect to MongoDB successfully");
    startServer();
  })
  .catch((e) => {
    console.log("Cannot connect to MongoDB. Error: " + e);
  });

const startServer = () => {
  app.get("/", (req, res) => {
    res.json({ message: "success" });
  });

  app.listen(5000, () => {
    console.log("Server starts at http://localhost:5000");
  });
};
