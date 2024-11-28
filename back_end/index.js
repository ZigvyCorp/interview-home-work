const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8888;
const dbURI = process.env.MONGODB_URI;
const userRoute = require("./src/routes/UserRoutes");
const postRoute = require("./src/routes/PostRoutes");
const commentRoute = require("./src/routes/CommentRoutes");
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Connection failed:", error);
  });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
//routes
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use(function (req, res) {
  res.status(404).send("Not found");
});
const listener = app.listen(PORT, () => {
  console.log(`Server is running on port ${listener.address().port}`);
});
