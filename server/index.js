const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
// const http = require("http");

const app = express();

const port = process.env.PORT || 3000;

const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const cmtsRoute = require("./routes/comments");

dotenv.config();
//connect mongodb
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
connectToDatabase();

// app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/api/user", usersRoute);
app.use("/api/post", postsRoute);
app.use("/api/comment", cmtsRoute);

// const server = http.createServer(app);
// server.listen(port, () => console.log(`Server started on port ${port}`));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
