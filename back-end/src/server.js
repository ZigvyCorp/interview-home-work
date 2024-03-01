const express = require("express");
const { PORT } = require("./config");
const { databaseConnection } = require("./setup");
const cors = require("cors");
// const { player } = require("./controllers");
const { userRouter, postRouter, commentRouter } = require("./routes");
const bodyParser = require("body-parser");
const app = express();

const startServer = async () => {
  try {
    app.use(express.json());
    app.use(bodyParser.json());
    app.use(cors());
    await databaseConnection();
    app.use("/api/v1/users", userRouter);
    app.use("/api/v1/posts", postRouter);
    app.use("/api/v1/comments", commentRouter);
    app
      .listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
      })
      .on("error", (err) => {
        console.error("err");
        console.error(err);
      });
  } catch (error) {
    console.log("====================================");
    console.log("re-start again");
    console.log(error);
    setTimeout(startServer, 5 * 60 * 1000);
    console.log("====================================");
  }
};

startServer();
