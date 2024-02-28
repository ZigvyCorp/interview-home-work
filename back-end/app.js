// app.js

const express = require("express");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/postRoute");
const userRoutes = require("./routes/userRoute");
const commentRoutes = require("./routes/commentRoute");
// Add more routes as needed
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
// Add more routes as needed

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
