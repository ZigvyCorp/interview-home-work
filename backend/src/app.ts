import express from "express";
import { PORT } from "./config/index.js";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes";
import postRoutes from './routes/postRoutes'

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.send("Home Page ");
});
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// MongoDB connection
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
