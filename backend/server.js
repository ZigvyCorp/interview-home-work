import path from "path";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import express from "express";


import commentRoutes from "./routes/commentRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"


dotenv.config()

connectDB()

const app = express();

const PORT = process.env.PORT || 5000
const __dirname = path.resolve();



app.use(express.json({ limit: "10mb" })) 
app.use(express.urlencoded({ limit: "10mb", extended: true })) /

app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)



app.listen(PORT, () => { console.log(`Server started at http://localhost:${PORT}`); })