const express = require("express");
const cors = require("cors");
const app = express();

const connectDb = require("./connectDb");

connectDb();

app.use(cors());
app.use("/comments", require("./routers/comment.router"));
app.use("/posts", require("./routers/post.router"));
app.use("/users", require("./routers/user.router"));

app.listen(3001, () => {
  console.log("Server start at port 3001");
});
