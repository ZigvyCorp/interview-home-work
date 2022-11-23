const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routers");
const cors = require("cors");
const ApiError = require("./utils/ApiError");
const httpStatus = require("http-status");
const {
  errorConverter,
  errorHandler
} = require("./middlewares/error");
const passport = require("passport");
const {
  jwtStrategy
} = require("./config/passport");
const mongoose = require("mongoose");
const config = require("./config/config");
const path = require("path")

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server running on PORT: " + PORT);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());
app.use(router);



mongoose.connect(config.MONGO_URI, {}, () => {
  console.log("MongoDB connected");
});

passport.initialize();
passport.use("jwt", jwtStrategy);
app.use(express.static('public'))
// send when 404 error
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

app.use(errorConverter);

app.use(errorHandler);

