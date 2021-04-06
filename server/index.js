const express = require("express");
const mongoose = require("mongoose");
const { MONGODB } = require("./config");
const postController = require("./routes/PostController");
const userController = require("./routes/UserController");
const commentController = require("./routes/CommentController");

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const app = express();
    app.use("/api", postController);
    app.use("/api", userController);
    app.use("/api", commentController);

    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
