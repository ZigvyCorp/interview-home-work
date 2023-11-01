const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

//Import Routes
const viewRouter = require("./routes/view.route");
const commentRouter = require("./routes/comment.route");
const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");

//Config env
dotenv.config(".env");

//Init app
const app = express();

//Set template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

//1. GLOBAL MIDDLEWARES

//Serving static files
app.use(express.static(path.join(__dirname, "public")));

//Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
app.use(cors());

//2. ROUTES
app.use("/", viewRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

//Check Unhandled Routes
app.all("*", (req, res, next) => {
  res.status(404).send(`Can't find ${req.originalUrl} on this server!`);
});

module.exports = app;
