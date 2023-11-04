const express = require("express");
const cors = require("cors");

const postRouter = require("./routes/postRoutes");
const commentRouter = require("./routes/commentRoutes");

const app = express();

app.use(cors({
    origin: 'http://localhost:3001',
    methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use("/api/v1/post", postRouter);
app.use("/api/v1/comment", commentRouter);


module.exports = app;
