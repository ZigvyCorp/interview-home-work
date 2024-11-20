const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/comments");
const authRouter = require("./routes/auth");
const app = express();
const port = 3000;
const cors = require("cors");
// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://dai:1232001@atlascluster.815csxs.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Middleware
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// Routes
app.use(userRoutes);
app.use(postRoutes);
// Sử dụng các routes cho Comment
app.use(commentRoutes);
app.use(authRouter);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// // server.js

// const mongoose = require("mongoose");

// // Kết nối đến cơ sở dữ liệu MongoDB
// const connectionString = "mongodb://localhost:27017/mydatabase"; // Thay đổi thành chuỗi kết nối của bạn
// mongoose
//   .connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });
// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();

// app.use(bodyParser.json());

// // Route đăng nhập
// app.post("/api/login", (req, res) => {
//   const { email, password } = req.body;

//   // Kiểm tra thông tin đăng nhập và trả về kết quả
//   // Ví dụ: Kiểm tra trong cơ sở dữ liệu nếu email và password hợp lệ
//   // Nếu hợp lệ, tạo token và gửi lại cho client
//   // Nếu không hợp lệ, trả về mã lỗi hoặc thông báo không thành công
// });

// // Route đăng ký
// app.post("/api/register", (req, res) => {
//   const { email, password } = req.body;

//   // Kiểm tra thông tin đăng ký và lưu vào cơ sở dữ liệu
//   // Ví dụ: Kiểm tra trong cơ sở dữ liệu nếu email đã tồn tại
//   // Nếu chưa tồn tại, lưu thông tin đăng ký vào cơ sở dữ liệu và gửi lại mã thành công cho client
//   // Nếu đã tồn tại, trả về mã lỗi hoặc thông báo không thành công
// });
// // server.js

// // ...

// // Route tạo bài đăng mới
// app.post("/api/posts", (req, res) => {
//   const { title, content } = req.body;

//   // Lưu bài đăng vào cơ sở dữ liệu
//   // Ví dụ: Tạo một document mới trong collection "posts" của MongoDB
//   // Lưu các trường như "title", "content", "author", "createdAt", ...
//   // Trả về mã thành công hoặc mã lỗi
// });

// // ...
// // server.js

// // ...

// // Route lấy danh sách bài đăng
// app.get("/api/posts", (req, res) => {
//   // Truy vấn cơ sở dữ liệu để lấy danh sách bài đăng
//   // Ví dụ: Lấy tất cả các document trong collection "posts" của MongoDB
//   // Trả về danh sách bài đăng cho client
// });

// // ...
// // server.js

// // ...

// // Route tìm kiếm bài đăng
// app.get("/api/posts/search", (req, res) => {
//   const keyword = req.query.keyword;

//   // Truy vấn cơ sở dữ liệu để tìm kiếm bài đăng theo từ khóa
//   // Ví dụ: Tìm các document trong collection "posts" của MongoDB có tiêu đề hoặc nội dung chứa từ khóa
//   // Trả về danh sách kết quả tìm kiếm cho client
// });

// // ...
// // server.js

// // ...

// // Route cập nhật hồ sơ người dùng
// app.put("/api/profile", (req, res) => {
//   const { name, email } = req.body;

//   // Cập nhật thông tin hồ sơ người dùng trong cơ sở dữ liệu
//   // Ví dụ: Tìm document người dùng dựavào thông tin đăng nhập (ví dụ: email) và cập nhật các trường như "name" và "email"
//   // Trả về mã thành công hoặc mã lỗi
// });

// // ...

// // Cấu hình cổng và khởi động server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
