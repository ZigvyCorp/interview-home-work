require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment")
const app = express();


app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, PUT"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/post", postRoutes);

app.use("/comment",commentRoutes) 

app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.statusCode || 500;
  const errorMessage = error.message;
  const data = error.data;
  res.status(statusCode).json({
    message: errorMessage,
    data: data,
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

