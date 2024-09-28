// Import library
const express = require("express");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Import internal
const postRoute = require("./routes/post");
const commentRoute = require("./routes/comment");
const userRoute = require("./routes/user");

// Config
dotEnv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware - config
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

// Middleware - routes
app.use("/posts", postRoute);
app.use("/comments", commentRoute);
app.use("/users", userRoute);

// Setup Server
mongoose
  .connect(`${process.env.MONGODB_URL}`)
  .then((result) => {
    console.log("Conneted to MongoDB");
    const server = app.listen(port);
    console.log(port);
  })
  .catch((err) => {
    console.log(err);
  });
