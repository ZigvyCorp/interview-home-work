const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./Config/Database");
const UserRoute = require("./Route/UserRoute");
const PostRoute = require("./Route/PostRoute");
const CommentRoute = require("./Route/CommentRoute");

require("dotenv").config();

let app = express();
let port = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

//routes

app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/comment", CommentRoute);

app.listen(port, function () {
  console.log("Starting at port: " + port);
});
