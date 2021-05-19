const express = require("express");

const path = require("path");
const app = express();
const cors = require("cors");
const port = 8080;

app.use(cors());

app.use("/user", require(path.join(__dirname, "./route/users")));
app.use("/post", require(path.join(__dirname, "./route/posts")));
app.use("/comment", require(path.join(__dirname, "./route/comments")));



app.listen(port, () => {
    console.log(
        `Server started on Port ${port}`
    );
});