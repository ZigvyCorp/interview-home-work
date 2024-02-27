var express = require("express");
var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const mongoose = require("mongoose");

var postRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var commentRouter = require("./routes/comment");

var app = express();

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blog");
    console.log("Connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
}

connectToDatabase();

const corsOpts = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOpts));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/posts", postRouter);
app.use("/users", usersRouter);
app.use("/comments", commentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { err });
});

app.listen(3001, () => {
  console.log("To-Do application is listening on port 3001");
});

module.exports = app;
