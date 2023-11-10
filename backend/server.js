import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import path from "path";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/api/v1/test", (req, res) => {
    res.send("API running");
});

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server is running ${process.env.NODE_ENV} on port ${PORT}`)
);
