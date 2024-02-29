const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(
	cors({
		origin: ["http://localhost:5173"],
		credentials: true,
	})
);

const postRoute = require("./routes/post.route");
const commentRoute = require("./routes/comment.route");
const userRoute = require("./routes/user.route");
const ErrorHandlerMiddleware = require("./middlewares/error-handler.middleware");

app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/comments", commentRoute);

// Avoid using express default error handler in production
process.env.NODE_ENV == "production" && app.use(ErrorHandlerMiddleware);

module.exports = app;
