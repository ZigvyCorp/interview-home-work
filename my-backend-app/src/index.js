const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routers = require("./routes/index"); // Import routers
require("dotenv").config(); // Nạp biến môi trường từ file .env
const app = express();

// Sử dụng cors
app.use(cors());

// Phân tích các yêu cầu JSON
app.use(express.json());

// Kết nối tới MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://ngnhatnam1510:ngnhatnam1510@cluster0.2ztzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Sử dụng routers
routers(app); // Sử dụng routers

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
