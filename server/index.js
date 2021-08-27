const express = require("express");
const http = require("http");
const app = express();

const server = http.createServer(app);
const cors = require("cors");

app.use(cors({ credentials: true, origin: true }));

const bodyParser = require("body-parser");

app.use(cors({ credentials: true, origin: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const config = require("./config/config");

//connect db
const mongo = require("./db/mongo");
mongo.connectMongo();

app.use(express.static("public"));
app.use(express.static("upload/videos"));
app.use(express.static("upload/images"));

// api router

// app.use("/api/index", require("./routes/index")());
app.use("/api/user", require("./routes/user")());
app.use("/api/post", require("./routes/post")());
app.use("/api/cmt", require("./routes/comment")());

server.listen(config.port, config.host, () => {
  console.log(1, `SERVER Api ON LISTENING: ${config.host}:${config.port}`);
});
