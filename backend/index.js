require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const database = require("./config/database");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");
const commentRouter = require("./routes/commentRoute");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
const PORT = process.env.PORT || 5000;

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
});

database
  .connect()
  .then(() => {
    //Routes
    app.listen(PORT, () => {
      console.log(`App listen on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
