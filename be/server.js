const express = require("express");
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/blog-api", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB database: ${error}`);
  }
};

connectDB();
const app = express();

const postsRoutes = require("./routes/posts");
const commentsRoutes = require("./routes/comments");
const usersRoutes = require("./routes/users");

app.use("/posts", postsRoutes);
app.use("/comments", commentsRoutes);
app.use("/users", usersRoutes);

app.listen(5000, () => console.log("Server started on port 5000"));
