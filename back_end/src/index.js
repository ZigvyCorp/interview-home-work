const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const roleRoute = require("./routes/role");
const postRoute = require("./routes/post");
const commentRoute = require("./routes/comment");

const app = express();
const port = 8088;

dotenv.config();

//CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected!");
  });


//USE
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());
app.use(morgan("common"));

//LISTEN
app.listen(port, () => {
  console.log(`Server is running ... https:localhost//${port}`);
});

//ROUTES
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/roles", roleRoute);
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/comments", commentRoute);
